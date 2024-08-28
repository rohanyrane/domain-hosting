function extractDomainName(url) {
    try {
        const regex = /^(?:https?:\/\/)?(?:www\.)?([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})(?:\/|$)/;
        const match = regex.exec(url);
        const domainParts = match[1].split('.');
        return domainParts.slice(-2).join('.');
    } catch (error) {
        return 'Error_Domain';
    }
}

function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
}

function createBanner(categorisedCookies, template, consentCookie) {

    let banner = `
  
  <div class="idfy-${template.bannerType}-AE1VSVI8T5" id="banner-home">
    <div class="banner-content-AE1VSVI8T5">
        <h2 class="banner-heading-AE1VSVI8T5">Cookie Notice</h2>
        <div class="${template.bannerType}-inner-AE1VSVI8T5">
        <p class="description-AE1VSVI8T5 ${template.bannerType}-desc-AE1VSVI8T5" >${template.bannerText}</p>
          <div class="${template.bannerType}-button-container-AE1VSVI8T5">
              <button onclick="submitConsent('all')" id="allow-btn-AE1VSVI8T5" class="${template.bannerType}-button-AE1VSVI8T5">Allow all</button>
              <button onclick="submitConsent('necessary')" class="${template.bannerType}-button-AE1VSVI8T5">Allow only Necessary</button>
              <button id="customize-btn-AE1VSVI8T5" class="${template.bannerType}-button-AE1VSVI8T5">Customize Settings</button>
          </div>
        </div>
    </div>
    <div class="powered-AE1VSVI8T5" style="border-radius:0px 0px 10px 10px;">
    Powered by <span><a href="https://www.privyone.com/" target="_blank">PRIVY</a></span>
    </div>
  </div>
  
  
  <div id="customize-screen-AE1VSVI8T5">
    <div class="customize-settings-screen-AE1VSVI8T5">
        <div>
            <div class="close-btn-AE1VSVI8T5">
                <button class="close-button-AE1VSVI8T5">×</button>
            </div>
            <div class="content-AE1VSVI8T5">
                <h2 class="box-heading-AE1VSVI8T5">About cookies on this site.</h2>
                <p class="box-description-AE1VSVI8T5">${template.customizeDescription}</p>
                <div class="categories-AE1VSVI8T5">`

    const categories = Object.keys(categorisedCookies)
    categories.forEach(category => {
        const cookieData = (categorisedCookies[category])
        const isNecessary = category === "necessary";
        const isChecked = consentCookie[category] || isNecessary;
        const disabledClass = isNecessary ? 'disabled' : '';
        banner += `
                    <div class="category-AE1VSVI8T5">
                        <div class="category-header-AE1VSVI8T5">
                            <div onclick="showDropdown('${category}')" style="cursor:pointer">
  
                                <button class="dropdown-arrow-AE1VSVI8T5 rotated-AE1VSVI8T5 dropdown-arrow-${category}">^</button>
  
                                <label for="${category}">${category.charAt(0).toUpperCase() + category.slice(1)} Cookies
                                </label>
                            </div>
                            <input type="checkbox" id="${category}-toggle" class="toggle-switch-AE1VSVI8T5" ${isChecked ? 'checked' : ''} ${disabledClass}>
                            <label for="${category}-toggle" class="toggle-label-AE1VSVI8T5 ${disabledClass}"></label>
                        </div>
                        <div id="dropdown-${category}" class="dropdown-content-AE1VSVI8T5">
                            <div class="category-description-AE1VSVI8T5">
                                ${cookieData.description}
                            </div>
                            <div onclick="viewCookies('${category}')" id="view-cookies-${category}" class="view-cookies-AE1VSVI8T5">View Cookies</div>
                        </div>
                        <div class="show-cookies-AE1VSVI8T5 show-cookies-AE1VSVI8T5-${category}">
                          <div id= "all-cookies-AE1VSVI8T5-${category}" class="all-cookies-AE1VSVI8T5">
  `
        cookieData.data.forEach(cookie => {
            banner += `            
                            <div class="cookie-AE1VSVI8T5">
                                <p class="cookie-name-AE1VSVI8T5"><span> Name </span>:
                                    ${cookie.cookie_name}</p>
                                <p class="platform-AE1VSVI8T5"><span>Platform </span>: ${cookie.platform}</p>
                            </div>
  `
        })
        banner += `</div>
              </div>
            </div>`

    })

    banner += `
  
                </div>
            </div>
        </div>
  
        <div class="bottom-panel-AE1VSVI8T5">
            <div class="preference-button-AE1VSVI8T5">
                <button onclick="submitConsent('preference')" class="button1-AE1VSVI8T5">Save my Preferences</button>
                <button onclick="submitConsent('necessary')" class="button2-AE1VSVI8T5">Allow only Necessary</button>
            </div>
            <div class="powered-AE1VSVI8T5">
                Powered by <span><a href="https://www.privyone.com/" target="_blank">PRIVY</a></span>
            </div>
        </div>
  
    </div>
  </div>
  
  `
    return banner
}

function submitConsent(agreedCategories, domain) {
    const agreedCookies = []
    let cookieConsent = JSON.parse(getCookieValue('privyConsent'));

    if (agreedCategories == 'all') {
        Object.keys(cookieConsent).forEach(key=> cookieConsent[key]=true)

    } else if (agreedCategories == 'necessary') {
        cookieConsent.necessary=true
        for (let key in cookieConsent) {
            if (key !== 'necessary') {
                cookieConsent[key]=false
            }
        }
        agreedCookies.push(agreedCategories)
    }
    else if (agreedCategories == "preference") {
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked')
        for (let i = 0; i < checkedBoxes.length; i++) {
            const categoryName = checkedBoxes[i].id.replace("-toggle", "")
            agreedCookies.push(categoryName)
            consent[categoryName] = 1
            cookieConsent[categoryName]=true
        }
        for (let key in cookieConsent) {
            if (!agreedCookies.includes(key)) {
                cookieConsent[key]=false
            }
        }
    }

    cookieConsent.update = true
    document.cookie = `privyConsent=${JSON.stringify(cookieConsent)}; path=/`;

    toggleBanner('hide')
}

function toggleBanner(action) {
    if (action === 'show') {
        document.getElementById('banner-home').style.display = ''
    }
    else if (action === 'hide') {
        document.getElementById("customize-screen-AE1VSVI8T5").style.display = 'none'
        document.getElementById('banner-home').style.display = 'none'
    }
}

const categorisedCookies = {
    necessary: {
        "data": [
            {
                "platform": "IDfy",
                "category": "Necessary",
                "cookie_name": "_idfy_session",
                "description": "Preserves user session state across page requests.",
                "duration": "Session",
                "data_controller": "IDfy",
                "id": "b76163e7-5131-4872-9c8a-6b926b751f51"
            }
        ],
        "description": "Essential cookies are crucial for the delivery of services, applications, or resources you request. They enable the website to function properly by managing actions such as loading visual elements, accessing resources, or user sign-ins and sign-outs. Essential cookies also ensure the service's security and efficiency by enabling features like authentication and load balancing."
    },
    functional: {
        "data": [
            {
                "id": "4204f375-a3e5-4b04-ae39-9adb71f3eb5d",
                "platform": "DoubleClick/Google Marketing",
                "category": "Functional",
                "cookie_name": "test_cookie",
                "domain": "doubleclick.net",
                "description": "This cookie is set by DoubleClick (which is owned by Google) to determine if the website visitor's browser supports cookies.",
                "duration": "1 year",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            },
            {
                "id": "36b7ca9d-ebcd-4d0e-b81e-27d44303f834",
                "platform": "Cloudflare",
                "category": "Functional",
                "cookie_name": "__cf_bm",
                "domain": "",
                "description": "Cloudflare's bot products identify and mitigate automated traffic to protect your site from bad bots. Cloudflare places the __cf_bm cookie on End User devices that access Customer sites that are protected by Bot Management or Bot Fight Mode. The __cf_bm cookie is necessary for the proper functioning of these bot solutions.",
                "duration": "session",
                "data_controller": "Cloudflare",
                "privacy_doc": "https://www.cloudflare.com/privacypolicy/",
                "wildcard_match": "0"
            },
            {
                "id": "f1fbdbbe-1326-4a0b-9a70-8d260c554936",
                "platform": "Cloudflare",
                "category": "Functional",
                "cookie_name": "_cfuvid",
                "domain": "",
                "description": "The _cfuvid cookie is only set when a site uses this option in a Rate Limiting Rule, and is only used to allow the Cloudflare WAF to distinguish individual users who share the same IP address.",
                "duration": "session",
                "data_controller": "Cloudflare",
                "privacy_doc": "https://www.cloudflare.com/privacypolicy/",
                "wildcard_match": "0"
            },
            {
                "id": "d0a28cbf-c082-477b-99fe-b45d0ef7e440",
                "platform": "Youtube",
                "category": "Functional",
                "cookie_name": "YSC",
                "domain": "youtube.com (3rd party)",
                "description": "Registers a unique ID to keep statistics of what videos from YouTube the user has seen.",
                "duration": "Session",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            },
            {
                "id": "46f0caca-7905-46ca-ae59-df689f8ef5fe",
                "platform": "J2EE",
                "category": "Functional",
                "cookie_name": "JSESSIONID",
                "domain": "",
                "description": "JSESSIONID is a cookie generated by Servlet containers and used for session management in J2EE web applications for HTTP protocol. If a Web server is using a cookie for session management, it creates and sends JSESSIONID cookie to the client and then the client sends it back to the server in subsequent HTTP requests. JSESSIONID is a platform session cookie and is used by sites with JavaServer Pages (JSP). The cookie is used to maintain an anonymous user session by the server.",
                "duration": "session",
                "data_controller": "J2EE",
                "privacy_doc": "",
                "wildcard_match": "1"
            }
        ],
        "description": "Set by us or third-party providers, functional cookies add extra features and enhance our website's functionality not directly necessary for the service you've requested. They enable convenience features such as pre-filled text fields, live chat support, and optional forms, improving your browsing experience with services like single sign-on (SSO)."
    },
    performance: {
        "data": [
            {
                "platform": "Google Analytics",
                "category": "Performance",
                "cookie_name": "_gat_UA-31536997-8",
                "description": "Used to throttle the request rate - limiting the collection of data on high traffic sites.",
                "duration": "1 minute",
                "data_controller": "Google",
                "id": "814c2599-6224-4bde-b1f4-92d1f310e3db"
            }
        ],
        "description": "These cookies collect data on how visitors interact with our website, allowing us to measure and improve our site's and software's effectiveness. They help us track visits and traffic sources, optimizing our website's performance. Without these cookies, we lose the ability to monitor our site's engagement and enhance user experience."
    },
    analytics: {
        "data": [
            {
                "platform": "Google Analytics",
                "category": "Analytics",
                "cookie_name": "_ga_SCYRND3JQS",
                "description": "Used to distinguish users by assigning a randomly generated number as a client identifier.",
                "duration": "2 years",
                "managed_by": "Google",
                "data_controller": "Google LLC",
                "id": "3c4fb681-5536-4322-8b74-02d371545481"
            },
            {
                "platform": "Google Analytics",
                "category": "Analytics",
                "cookie_name": "_ga_FLWE815XLG",
                "description": "Used to distinguish users in Google Analytics.",
                "duration": "2 years",
                "data_controller": "Google",
                "id": "29b0e1c2-f374-4fb7-bc06-67904f24b569"
            },
            {
                "id": "256c18e8-d881-11e9-8a34-2a2ae2dbcce4",
                "platform": "Google Analytics",
                "category": "Analytics",
                "cookie_name": "_ga",
                "domain": "google-analytics.com (3rd party) or",
                "description": "ID used to identify users",
                "duration": "2 years",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            },
            {
                "platform": "Google Analytics",
                "category": "Analytics",
                "cookie_name": "_gat_gtag_UA_31536997_8",
                "description": "Used to throttle request rate in Google Analytics. This cookie does not store any user information.",
                "duration": "1 minute",
                "data_controller": "Google LLC",
                "id": "b8b0166b-7dc7-4ca9-a8bc-7995ae6e4770"
            },
            {
                "id": "256c1ae6-d881-11e9-8a34-2a2ae2dbcce4",
                "platform": "Google Analytics",
                "category": "Analytics",
                "cookie_name": "_gid",
                "domain": "google-analytics.com (3rd party) or",
                "description": "ID used to identify users for 24 hours after last activity",
                "duration": "24 hours",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            },
            {
                "id": "92250c0b-2cb3-4eea-8b38-f8cc19228ef0",
                "platform": "LinkedIn",
                "category": "Analytics",
                "cookie_name": "AnalyticsSyncHistory",
                "domain": "linkedin.com (3rd party)",
                "description": "Used to store information about the time a sync with the lms_analytics cookie took place for users in the Designated Countries",
                "duration": "30 days",
                "data_controller": "LinkedIn",
                "privacy_doc": "https://www.linkedin.com/legal/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "platform": "Google Analytics",
                "category": "Analytics",
                "cookie_name": "documentationConfig",
                "description": "Used to collect information on how visitors interact with the documentation pages of a website.",
                "duration": "30 minutes",
                "data_controller": "Google",
                "id": "2ad1eb11-2678-4a30-abcc-b1cf9f4b6ead"
            }
        ],
        "description": "Analytics cookies are used to gather information on website usage, helping us understand visitor behavior. They track user interactions, providing insights that enable us to enhance the website's user experience and functionality. These cookies do not identify you personally but offer aggregated data to improve site performance."
    },
    marketing: {
        "data": [
            {
                "id": "02865dba-5da8-46ec-b100-50c1b8a1e913",
                "platform": "Hubspot",
                "category": "Marketing",
                "cookie_name": "hubspotutk",
                "domain": "hubspot.com",
                "description": "This cookie keeps track of a visitor's identity. It is passed to HubSpot on form submission and used when deduplicating contacts.",
                "duration": "13 months",
                "data_controller": "HubSpot",
                "privacy_doc": "https://legal.hubspot.com/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "0641f061-2be6-4d26-adea-d8614c7f097b",
                "platform": "Hubspot",
                "category": "Marketing",
                "cookie_name": "__hssc",
                "domain": "hubspot.com",
                "description": "This cookie keeps track of sessions.",
                "duration": "30 minutes",
                "data_controller": "HubSpot",
                "privacy_doc": "https://legal.hubspot.com/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "04f6c79c-87a2-420f-a341-15b806967c80",
                "platform": "Hubspot",
                "category": "Marketing",
                "cookie_name": "__hssrc",
                "domain": "hubspot.com",
                "description": "Whenever HubSpot changes the session cookie, this cookie is also set to determine if the visitor has restarted their browser.",
                "duration": "session",
                "data_controller": "HubSpot",
                "privacy_doc": "https://legal.hubspot.com/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "a4a0bfbb-2fff-4352-a931-105381955855",
                "platform": "Hubspot",
                "category": "Marketing",
                "cookie_name": "__hstc",
                "domain": "hubspot.com",
                "description": "The main cookie for tracking visitors.",
                "duration": "13 months",
                "data_controller": "HubSpot",
                "privacy_doc": "https://legal.hubspot.com/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "f0c95579-9131-4caf-8240-51eb01be6eb9",
                "platform": "Google",
                "category": "Marketing",
                "cookie_name": "_gcl_au",
                "domain": "",
                "description": "Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.",
                "duration": "3 months",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            },
            {
                "id": "ae06e8a9-ad4f-4bfa-96b9-0368a70528c0",
                "platform": "LinkedIn",
                "category": "Marketing",
                "cookie_name": "li_sugr",
                "domain": "",
                "description": "Used to make a probabilistic match of a user's identity outside the Designated Countries",
                "duration": "90 days",
                "data_controller": "LinkedIn",
                "privacy_doc": "https://www.linkedin.com/legal/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "1b1067dd-9003-40f8-a2d6-c6ac72bb6779",
                "platform": "LinkedIn",
                "category": "Marketing",
                "cookie_name": "lidc",
                "domain": "linkedin.com (3rd party)",
                "description": "Used by the social networking service, LinkedIn, for tracking the use of embedded services.",
                "duration": "1 day",
                "data_controller": "LinkedIn",
                "privacy_doc": "https://www.linkedin.com/legal/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "1874cfdd-0691-4ce0-a158-bc3c1605275e",
                "platform": "LinkedIn",
                "category": "Marketing",
                "cookie_name": "UserMatchHistory",
                "domain": "linkedin.com (3rd party)",
                "description": "These cookies are set by LinkedIn for advertising purposes, including: tracking visitors so that more relevant ads can be presented, allowing users to use the 'Apply with LinkedIn' or the 'Sign-in with LinkedIn' functions, collecting information about how visitors use the site, etc.",
                "duration": "session",
                "data_controller": "LinkedIn",
                "privacy_doc": "https://www.linkedin.com/legal/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "657f80f4-7eb6-41c9-9bc7-7d2570a0887f",
                "platform": "LinkedIn",
                "category": "Marketing",
                "cookie_name": "bcookie",
                "domain": "linkedin.com (3rd party)",
                "description": "Used by LinkedIn to track the use of embedded services.",
                "duration": "1 year",
                "data_controller": "LinkedIn",
                "privacy_doc": "https://www.linkedin.com/legal/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "002f276f-84c1-428a-bbe3-951a6cf56175",
                "platform": "LinkedIn",
                "category": "Marketing",
                "cookie_name": "bscookie",
                "domain": "linkedin.com (3rd party)",
                "description": "Used by LinkedIn to track the use of embedded services.",
                "duration": "1 year",
                "data_controller": "LinkedIn",
                "privacy_doc": "https://www.linkedin.com/legal/privacy-policy",
                "wildcard_match": "0"
            },
            {
                "id": "87613af8-8486-47ef-93c9-b45c9c285106",
                "platform": "Youtube",
                "category": "Marketing",
                "cookie_name": "VISITOR_INFO1_LIVE",
                "domain": "youtube.com (3rd party)",
                "description": "Tries to estimate the users' bandwidth on pages with integrated YouTube videos. Also used for marketing",
                "duration": "179 days",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            },
            {
                "id": "2728a6ef-63ee-4f43-960c-b523f7e0286b",
                "platform": "Youtube",
                "category": "Marketing",
                "cookie_name": "VISITOR_PRIVACY_METADATA",
                "domain": "youtube.com (3rd party)",
                "description": "Youtube visitor privacy metadata cookie",
                "duration": "180 days",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            },
            {
                "id": "256c8986-d881-11e9-8a34-2a2ae2dbcce4",
                "platform": "DoubleClick/Google Marketing",
                "category": "Marketing",
                "cookie_name": "IDE",
                "domain": "doubleclick.net (3rd party)",
                "description": "This cookie is used for targeting, analyzing and optimisation of ad campaigns in DoubleClick/Google Marketing Suite ",
                "duration": "2 years",
                "data_controller": "Google",
                "privacy_doc": "https://privacy.google.com/take-control.html",
                "wildcard_match": "0"
            }
        ],
        "description": "Our advertising partners deploy these cookies to tailor advertising to your interests, based on your browsing behavior and preferences. They track your online activity to build a profile for customized advertising, ensuring the ads you encounter on other sites are aligned with your interests."
    }

}

const template = {
    bannerType: "banner",
    verticalAlign: "bottom",
    horizontalAlign: "right",
    buttonColor: "#1C43B9",
    hoverColor: "#214698",
    textColor: "#fff",
    theme: "light",
    fontName: "Helvetica",
    toggleColor: "#1C43B9",
    bannerText: `We use three kinds of cookies on our websites: required, functional, and advertising. You can choose whether functional and advertising cookies apply. Click on the different cookie categories to find out more about each category and to change the default settings.`,
    customizeDescription: `IDfy's website may request cookies to be set on your device. We use cookies to identify when you visit our sites, to understand your interactions, and to enhance and personalize your experience. Cookies also support social media features and tailor your engagement with IDfy, including delivering more relevant advertisements. You can review the different category headings to learn more and adjust your cookie preferences anytime. Please keep in mind that your choices may affect your experience on our IDfy sites and the quality of services we can provide. Blocking certain types of cookies might affect the functionality and service offerings made available to you.`
}

window.onload = async () => {

    const url = 'https://www.idfy.com/'
    const domain = extractDomainName(url)
    const categories = Object.keys(categorisedCookies)
    let consentCookie = JSON.parse(getCookieValue('privyConsent'))
    if (!consentCookie) {
        let cookie = {}
        for (let key of categories) {
            if (key === 'necessary')
                cookie[key] = true
            else
                cookie[key] = false
        }
        cookie.update = false
        document.cookie = `privyConsent=${JSON.stringify(cookie)}; path=/`;
    }
    consentCookie = JSON.parse(getCookieValue('privyConsent'))

    consentButtonDiv = document.createElement('div')
    consentButtonDiv.className = "consent-button-AE1VSVI8T5"
    consentButtonDiv.innerHTML = `<button onclick="toggleBanner('show')">change consent</button>`
    document.body.appendChild(consentButtonDiv)

    const banner = createBanner(categorisedCookies, template, domain, consentCookie)
    const bannerContainer = document.createElement('div')
    bannerContainer.className = "banner-container-AE1VSVI8T5"
    bannerContainer.innerHTML = banner
    document.body.appendChild(bannerContainer)


    let horizontal = "flex-end", leftRight = "right", vertical = "bottom"
    if (template.horizontalAlign == "left") {
        horizontal = "flex-start"
        leftRight = "left"
    }
    if (template.verticalAlign == "top")
        vertical = "top"

    const styleTag = document.createElement("style")
    styleTag.innerHTML = `
      .banner-container-AE1VSVI8T5{
        margin: 5px;
      }
      
      @keyframes glideBanner {
        0% {
          transform: translateY(100%);
        }
        100% {
          transform: translateY(0%);
        }
      }
  
      .idfy-classic-AE1VSVI8T5 {
          display: flex;
          flex-direction:column;
          background-color: white;
          justify-content: ${horizontal};
          position: fixed;
          ${vertical}: 20px;
          ${leftRight}: 10px;
          width: 53%;
          max-width: 70em;
          border-radius: 10px;
          font-family: ${template.fontName} !important;
          -webkit-font-smoothing: antialiased;
          z-index: 2147483647 !important; 
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          animation: glideBanner 1.5s ease-in-out forwards;
      }
  
      .idfy-banner-AE1VSVI8T5 {
        display: flex;
        flex-direction:column;
        background-color: white;
        justify-content: flex-end;
        position: fixed;
        ${vertical}: 0px;
        right: 0px;
        left: 0px;
        width: 100%;
        border-radius: 10px;
        font-family: ${template.fontName} !important;
        -webkit-font-smoothing: antialiased;
        z-index: 2147483647 !important; 
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        animation: glideBanner 1.5s ease-in-out forwards;
      }
  
      .idfy-box-AE1VSVI8T5 {
        display: flex;
        flex-direction:column;
        background-color: white;
        justify-content: flex-end;
        position: fixed;
        ${vertical}: 30px; 
        ${leftRight}: 10px;
        width: 25%;
        min-width:325px; 
        border-radius: 10px;
        font-family: ${template.fontName} !important;
        -webkit-font-smoothing: antialiased;
        z-index: 2147483647 !important; 
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        animation: glideBanner 1.5s ease-in-out forwards;
      }
  
      .banner-content-AE1VSVI8T5 {
        overflow-y:auto;
        padding: 20px !important;
        transition: 2s;
      }
  
      .banner-heading-AE1VSVI8T5 {
        font-size: 18px !important;
        margin: 0px !important;
        font-weight:bold !important;
        line-height:1 !important;
        padding:0px !important;
        color:#000000 !important;
      }
  
      .banner-inner-AE1VSVI8T5 {
        display: flex !important;
        align-items: center !important;
      }
  
      .description-AE1VSVI8T5 {
          font-size: 14px !important;
          color: #484E56;
          line-height: 1.3 !important;
          margin:14px 0px 14px 0px !important;
          padding:0px!important;
          color:#484E56 !important;
      }
  
      .banner-desc-AE1VSVI8T5{
        flex:7 !important;
        margin:14px 10px 14px 0px !important;
      }
  
      .banner-button-container-AE1VSVI8T5,.classic-button-container-AE1VSVI8T5 {
          text-align: right!important;
          margin-top: 10px!important;
      }
  
      .box-button-container-AE1VSVI8T5{
        font-size: 14px!important;
        text-align: center!important;
        margin-top: 10px!important;
      }
  
      .classic-button-AE1VSVI8T5,.banner-button-AE1VSVI8T5{
          margin: 2.5px !important;
          color: ${template.buttonColor};
          padding: 9px 22px !important;
          border: 1px solid ${template.buttonColor} !important;
          border-radius: 8px !important;
          background: white;
          display:inline-block !important;
          line-height: 1!important;
          font-weight: Normal!important;
          font-size: 12px !important;
          font-family: ${template.fontName} !important;
          -webkit-font-smoothing: antialiased;
      }
      .box-button-AE1VSVI8T5 {
          margin: 2.5px !important;
          color: ${template.buttonColor};
          border: 1px solid ${template.buttonColor} !important;
          border-radius: 8px !important;
          background: white;
          line-height: 1!important;
          font-weight: Normal!important;
          font-family: ${template.fontName} !important;
          -webkit-font-smoothing: antialiased;
          width: 100%;
          height: 100%;
          font-size: 15px !important;
          padding: 9px 22px !important;
          display:block !important;
      }
  
      #allow-btn-AE1VSVI8T5 {
          background-color:${template.buttonColor};
          color: ${template.textColor}!important;
          border: 1px solid ${template.buttonColor}!important;
      }
  
      /* custmise banner screen css */
      #customize-screen-AE1VSVI8T5 {
          display: none;
      }
  
      .customize-settings-screen-AE1VSVI8T5 {
          width: 40%;
          height: 80%;
          min-width: 290px;
          max-width: 370px ;
          background-color: white;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          position: fixed;
          z-index: 2147483647 !important;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: ${template.fontName};
          -webkit-font-smoothing: antialiased;
          overflow: scroll;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 5px;
      }
  
      .content-AE1VSVI8T5 {
          padding: 20px;
  
      }
  
      .close-btn-AE1VSVI8T5 {
          display: flex;
          justify-content: end;
          border-bottom: 0.5px solid #B2B5B8;
          padding: 10px; 
          position: sticky;
          top: 0;
          background-color: #fff;
          z-index:2147483647 !important;
      }
  
      .close-button-AE1VSVI8T5 {
          color: #7D8187 !important;
          margin: 0px 10px !important;
          font-size: 20px !important;
          background-color: transparent !important;
          border: none !important;
          cursor: pointer;
          display:inline-block !important;
          padding: 0 !important;
      }
  
      .box-heading-AE1VSVI8T5 {
          font-size: 18px !important;
          margin: 0px !important;
          color: #131A25 !important;
          font-weight:bold !important;
          line-height:1 !important;
          padding:0px !important;
      }
  
      .box-description-AE1VSVI8T5 {
          font-size: 14px !important;
          margin: 14px 0px!important;
          color: #484E56 !important;
          line-height: 1.35 !important;
          padding: 0px !important;
      }
  
      .categories-AE1VSVI8T5 {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
      }
  
      .category-AE1VSVI8T5 {
          margin-bottom: 10px;
      }
  
      .category-header-AE1VSVI8T5 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #B2B5B8;
          border-radius: 10px;
          padding: 10px;
          background-color: #FAFAFB;
      }
  
      .category-AE1VSVI8T5 label {
          font-size: 14px !important;
          line-height:1 !important;
          margin: 0px !important;
          padding: 0px !important;
          color: #000000 !important;
          display: inline !important;
          font-weight: 400 !important;
      }
  
      .toggle-switch-AE1VSVI8T5 {
          display: none !important;
      }
  
      .toggle-label-AE1VSVI8T5 {
          display: inline-block !important;
          width: 40px !important;
          height: 20px !important;
          background-color: #ccc;
          border-radius: 10px;
          position: relative !important;
          cursor: pointer;
      }
  
      .toggle-label-AE1VSVI8T5::after {
          content: '';
          width: 18px;
          height: 18px;
          background-color: white;
          border-radius: 50%;
          position: absolute !important;
          top: 1px;
          left: 1px;
          transition: 0.3s;
      }
  
      .toggle-switch-AE1VSVI8T5:checked+.toggle-label-AE1VSVI8T5 {
          background-color: #1C43B9;
      }
  
      .toggle-switch-AE1VSVI8T5:checked+.toggle-label-AE1VSVI8T5::after {
          transform: translateX(20px);
      }
  
      .toggle-label-AE1VSVI8T5.disabled {
        background-color: #ccc; 
        opacity: 0.7; 
        cursor: not-allowed; 
    }
    
    .toggle-label-AE1VSVI8T5.disabled::after {
        background-color: #fff; 
    }
  
      .dropdown-arrow-AE1VSVI8T5 {
          margin-right: 10px !important;
          transform: scale(2.5, 2) translate(0, 2px);
          background-color: transparent !important;
          border: none !important;
          align-items: baseline;
          font-family: 'Courier New', Courier, monospace !important;
          transition: transform 0.3s ease !important;
          display:inline-block !important;
          line-height: 1!important;
          font-weight: 100!important;
          padding: 1px 6px !important;
          font-size:13.3px !important;
          color: #000000 !important;
      }
  
      .rotated-AE1VSVI8T5 {
          transform: scale(2.5, 2) translate(0, -3px) rotate(180deg);
          transition: transform 0.3s ease;
      }
  
      .dropdown-content-AE1VSVI8T5 {
          display: none;
          background-color: #F3F3F4;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0 0 10px 10px;
          padding: 20px;
      }
  
      .category-description-AE1VSVI8T5 {
          font-size: 11px !important;
          color: #131A25 !important;
          line-height: 15px !important;
          margin:0px !important;
          padding: 0px !important;
      }
  
      .view-cookies-AE1VSVI8T5 {
          font-size: 11px !important;
          color: #214698 !important;
          margin-top: 10px !important;
          cursor: pointer;
      }
  
      .show-cookies-AE1VSVI8T5 {
        max-height: 170px !important;
        overflow: scroll !important;
      }
      .show-cookies-AE1VSVI8T5::-webkit-scrollbar {
        display: none;
      }
  
      .all-cookies-AE1VSVI8T5 {
          display: none;
          background-color: #F3F3F4;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0 0 10px 10px;
          padding: 2px 10px 9px 10px;
          color: #131A25;
          font-size: 11px;
      }
  
      .cookie-AE1VSVI8T5 {
          font-size: 11px !important;
          background-color: #E2E2E2;
          padding: 8px 18px !important;
          margin-top: 6px !important;
          border-radius: 12px;
          overflow: scroll;
      }
      .cookie-AE1VSVI8T5::-webkit-scrollbar {
        display: none;
      }
  
      .cookie-name-AE1VSVI8T5,
      .platform-AE1VSVI8T5 {
          margin: 2px 0px !important;
          font-size: 11px !important;
          line-height: 1 !important;
          color: #131A25 !important;
          padding: 0px !important;
      }
  
      .bottom-panel-AE1VSVI8T5 {
          position: sticky;
          bottom: 0;
          width: 100%;
      }
  
      .preference-button-AE1VSVI8T5 {
          border-top: 0.5px solid #B2B5B8;
          padding: 10px;
          text-align: center;
          background-color: #fff;
          display:flex;
          justify-content: space-around;
          flex-direction:row;
      }
  
      .preference-button-AE1VSVI8T5 button {
          padding: 10px 18px !important;
          // width:45% !important;
          font-size: 12px !important;
          border-radius: 8px !important;
          margin: 3px !important;
          // display:inline-block !important;
          line-height: 1!important;
          font-weight: Normal!important;
          font-family: ${template.fontName} !important;
          -webkit-font-smoothing: antialiased;
      }
  
  
  
      .button1-AE1VSVI8T5 {
          color: ${template.textColor} !important;
          border: 1px solid ${template.buttonColor} !important;
          background-color: ${template.buttonColor};
          transition: 0.3s;
          flex:1;
      }
  
      .button2-AE1VSVI8T5 {
          color: ${template.buttonColor} !important;
          border: 1px solid ${template.buttonColor} !important;
          background-color: #fff;
          transition: 0.3s;
          flex:1;
      }
  
      .button2-AE1VSVI8T5:hover,
      .button1-AE1VSVI8T5:hover,
      .classic-button-AE1VSVI8T5:hover,.banner-button-AE1VSVI8T5:hover,.box-button-AE1VSVI8T5:hover,#allow-btn-AE1VSVI8T5:hover {
          background-color: ${template.hoverColor};
          color: #fff !important;
          transition: 0.3s;
          border: 1px solid ${template.hoverColor} !important;
      }
  
      .powered-AE1VSVI8T5 {
          text-align: right;
          background-color: #F3F3F4;
          font-size: 10px !important;
          padding: 1px 10px !important;
          margin:0px !important;
          color: #7D8187 !important;
      }
  
      .powered-AE1VSVI8T5 a {
          color: #1C43B9 !important;
          font-weight: bold !important;
          text-decoration:none !important;
        } 
  
      @media (max-width: 900px) {
        .classic-button-container-AE1VSVI8T5,
        .box-button-container-AE1VSVI8T5{
          text-align: center!important;
        }
        .classic-button-AE1VSVI8T5,.box-button-AE1VSVI8T5 {
          width: 100%;
          height: 100%;
          font-size: 15px !important;
          padding: 13px 22px !important;
          display:block !important;
        }
  
        .banner-inner-AE1VSVI8T5 {
          display: block !important;
          align-items: right !important;
        }
      }
  
  
      @media (max-width: 480px) {
        .idfy-classic-AE1VSVI8T5,
        .idfy-banner-AE1VSVI8T5,
        .idfy-box-AE1VSVI8T5{
          bottom: 0;
          right: 0;
          left:0;
          width: 100%;
          max-height:80%;
          overflow:scroll;
        }
  
        .banner-button-AE1VSVI8T5{
              width: 100%;
              height: 100%;
              font-size: 15px !important;
              padding: 13px 22px !important;
              display:block !important;
            }
  
        .customize-settings-screen-AE1VSVI8T5 {
          height:85vh;
          width:90vw;
          max-width:480px;
          padding:0;
          margin:0;
        }
  
        .preference-button-AE1VSVI8T5 button{
          padding: 13px 22px !important;
          font-size: 15px !important;
        }
  
      }
  
      @media (max-width: 850px){
        .preference-button-AE1VSVI8T5{
          flex-direction:column;
        }
      }
        
        `
    document.head.appendChild(styleTag)

    const scriptTag = document.createElement("script")
    scriptTag.innerHTML = `
          const closeButton = document.querySelector(".close-btn-AE1VSVI8T5")
          closeButton.addEventListener('click', function () {
              const customizeScreen = document.getElementById("customize-screen-AE1VSVI8T5")
              customizeScreen.style.display = "none"
      
              const bannerHome = document.getElementById("banner-home")
              bannerHome.style.display = ""
          })
      
          const customizeButton = document.getElementById("customize-btn-AE1VSVI8T5")
          customizeButton.addEventListener('click', function () {
              const customizeScreen = document.getElementById("customize-screen-AE1VSVI8T5")
              customizeScreen.style.display = "block";
      
              const bannerHome = document.getElementById("banner-home")
              bannerHome.style.display = "none" 
      
          })
      
          function showDropdown(category) {
            const dropdown = document.getElementById('dropdown-' + category);
            const allCookies = document.getElementById('all-cookies-AE1VSVI8T5-' + category);
            const dropIcon = document.querySelector('.dropdown-arrow-' + category);
            if (dropdown.style.display === "block" || allCookies.style.display === "block") {
                dropdown.style.display = "none";
                allCookies.style.display = "none";
                dropIcon.classList.add('rotated-AE1VSVI8T5');
            } else {
                dropdown.style.display = "block";
                dropIcon.classList.remove('rotated-AE1VSVI8T5');
            }
        }
      
           function viewCookies(category) {
            const allCookies = document.getElementById('all-cookies-AE1VSVI8T5-' + category);
            allCookies.style.display = "block";
    
            const dropdown = document.getElementById('dropdown-' + category);
            dropdown.style.display = "none";
            }`
    document.head.appendChild(scriptTag)

    if (consentCookie.update === false) {
        toggleBanner('show')
    }
    else {
        toggleBanner('hide')
    }

}

