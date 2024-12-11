
const template = {"bannerType":"box","positionDesktop":"bottom-left","positionMobile":"bottom","buttonColor":"#2b57b6","hoverButtonColor":"#254ca0","buttonTextColor":"white","hoverTextColor":"white","preferenceManagerHorizontalPosition":"left","buttonsText":{"acceptAll":"Accept All","moreSettings":"More Settings","savePreferences":"Save My Preferences","allowNecessary":"Allow Only Necessary"},"contentDesktop":{"cookieNotice":"This website stores cookies on your computer device. These cookies are used to enhance your browser experience, for analytics on how our website is used, and to assist in our marketing and promotional efforts.","preferenceManager":"IDfy's website may request cookies to be set on your device. We use cookies to identify when you visit our sites, to understand your interactions, and to enhance and personalize your experience. Cookies also support social media features and tailor your engagement with IDfy, including delivering more relevant advertisements. You can review the different category headings to learn more and adjust your cookie preferences anytime. Please keep in mind that your choices may affect your experience on our IDfy sites and the quality of services we can provide. Blocking certain types of cookies might affect the functionality and service offerings made available to you."},"contentMobile":{"cookieNotice":"This website stores cookies on your computer device. These cookies are used to enhance your browser experience, for analytics on how our website is used, and to assist in our marketing and promotional efforts.","preferenceManager":"IDfy's website may request cookies to be set on your device. We use cookies to identify when you visit our sites, to understand your interactions, and to enhance and personalize your experience. Cookies also support social media features and tailor your engagement with IDfy, including delivering more relevant advertisements. You can review the different category headings to learn more and adjust your cookie preferences anytime. Please keep in mind that your choices may affect your experience on our IDfy sites and the quality of services we can provide. Blocking certain types of cookies might affect the functionality and service offerings made available to you."},"activeBanner":"cookie-banner","activeDevice":"desktop"};
const categorisedCookies = {"analytics":[{"id":"3a53ae78-33af-49a7-b49c-8fca5ba0c0b8","category":"Analytics","master_id":"fb3abcc3-e3a9-45da-ab4e-4584159cd922","meta_data":{"domain":".yourwebsite.com","duration":"30 minutes","platform":"Hotjar","data_controller":"Hotjar"},"cookie_name":"_hjSession_5091923","description":"This cookie is set by Hotjar to uniquely identify a user's session on the site and track general user behavior."},{"id":"69ba9f02-96bf-4c06-ba88-b112761b8dbc","category":"Analytics","master_id":"9d0f053d-9003-44b0-86d6-321709865be2","meta_data":{"domain":".hotjar.com","duration":"Session","platform":"Hotjar","data_controller":"Hotjar Limited"},"cookie_name":"_hjSessionUser_5091923","description":"This cookie is set by Hotjar. This cookie is used to store the User ID and any custom variables created in their site."},{"id":"30546e28-8d23-4892-b6de-054db0df2541","category":"Analytics","master_id":"8d0e16eb-5419-4c56-b8cd-3fccb9645bcd","meta_data":{"domain":"linkedin.com (3rd party)","duration":"30 days","platform":"LinkedIn","privacy_doc":"https://www.linkedin.com/legal/privacy-policy","wildcard_match":"0","data_controller":"LinkedIn"},"cookie_name":"AnalyticsSyncHistory","description":"Used to store information about the time a sync with the lms_analytics cookie took place for users in the Designated Countries"}],"marketing":[{"id":"1a88a1d9-caa2-4d0a-954c-b13afdfaa906","category":"Marketing","master_id":"5f9afb4c-e9ff-4ddb-93f4-b0d4c5e6cc1b","meta_data":{"domain":"","duration":"90 days","platform":"LinkedIn","privacy_doc":"https://www.linkedin.com/legal/privacy-policy","wildcard_match":"0","data_controller":"LinkedIn"},"cookie_name":"li_sugr","description":"Used to make a probabilistic match of a user's identity outside the Designated Countries"},{"id":"9f3ac7bf-fbb9-4f3e-96ee-6b39141dbd10","category":"Marketing","master_id":"ac022509-53d9-4179-87ff-baae6a0c9426","meta_data":{"domain":"linkedin.com (3rd party)","duration":"1 year","platform":"LinkedIn","privacy_doc":"https://www.linkedin.com/legal/privacy-policy","wildcard_match":"0","data_controller":"LinkedIn"},"cookie_name":"bcookie","description":"Used by LinkedIn to track the use of embedded services."},{"id":"7d758960-7028-46c5-9f98-df5084762226","category":"Marketing","master_id":"fd8aabb5-9b85-4e51-8a1b-2e2c592f6825","meta_data":{"domain":"linkedin.com (3rd party)","duration":"1 year","platform":"LinkedIn","privacy_doc":"https://www.linkedin.com/legal/privacy-policy","wildcard_match":"0","data_controller":"LinkedIn"},"cookie_name":"bscookie","description":"Used by LinkedIn to track the use of embedded services."},{"id":"aa45aa59-a699-4271-b4ac-92c99a5dd415","category":"Marketing","master_id":"7d3c77da-27d1-4154-bed2-eaae73bb8705","meta_data":{"domain":"linkedin.com (3rd party)","duration":"session","platform":"LinkedIn","privacy_doc":"https://www.linkedin.com/legal/privacy-policy","wildcard_match":"0","data_controller":"LinkedIn"},"cookie_name":"UserMatchHistory","description":"These cookies are set by LinkedIn for advertising purposes, including: tracking visitors so that more relevant ads can be presented, allowing users to use the 'Apply with LinkedIn' or the 'Sign-in with LinkedIn' functions, collecting information about how visitors use the site, etc."},{"id":"0f932e1d-2287-47c1-8950-bc2a16f0b0b2","category":"Marketing","master_id":"62251856-ade4-41bb-9e4b-82d3626ef880","meta_data":{"domain":"linkedin.com (3rd party)","duration":"1 day","platform":"LinkedIn","privacy_doc":"https://www.linkedin.com/legal/privacy-policy","wildcard_match":"0","data_controller":"LinkedIn"},"cookie_name":"lidc","description":"Used by the social networking service, LinkedIn, for tracking the use of embedded services."}],"functional":[{"id":"55d18439-2a33-42f2-a6ba-c69b0fe19380","category":"Functional","master_id":"0c10f469-1254-4548-96d7-5108208f0e5d","meta_data":{"domain":"","duration":"session","platform":"Cloudflare","privacy_doc":"https://www.cloudflare.com/privacypolicy/","wildcard_match":"0","data_controller":"Cloudflare"},"cookie_name":"__cf_bm","description":"Cloudflare's bot products identify and mitigate automated traffic to protect your site from bad bots. Cloudflare places the __cf_bm cookie on End User devices that access Customer sites that are protected by Bot Management or Bot Fight Mode. The __cf_bm cookie is necessary for the proper functioning of these bot solutions."}]};

function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(cookie => cookie.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
}
    
function toggleBanner(action) {
    if (action === 'show') {
        document.getElementById('banner-home').style.display = '';
    }
    else if (action === 'hide') {
        document.getElementById("customize-screen-AE1VSVI8T5").style.display = 'none';
        document.getElementById('banner-home').style.display = 'none';
    }
    }

    const categoryDescriptions = {
    necessary: "Essential cookies are crucial for the delivery of services, applications, or resources you request. They enable the website to function properly by managing actions such as loading visual elements, accessing resources, or user sign-ins and sign-outs. Essential cookies also ensure the service's security and efficiency by enabling features like authentication and load balancing.",
    marketing: "Our advertising partners deploy these cookies to tailor advertising to your interests, based on your browsing behavior and preferences. They track your online activity to build a profile for customized advertising, ensuring the ads you encounter on other sites are aligned with your interests.",
    analytics: "Analytics cookies are used to gather information on website usage, helping us understand visitor behavior. They track user interactions, providing insights that enable us to enhance the website's user experience and functionality. These cookies do not identify you personally but offer aggregated data to improve site performance.",
    performance: "These cookies collect data on how visitors interact with our website, allowing us to measure and improve our site's and software's effectiveness. They help us track visits and traffic sources, optimizing our website's performance. Without these cookies, we lose the ability to monitor our site's engagement and enhance user experience.",
    functional: "Set by us or third-party providers, functional cookies add extra features and enhance our website's functionality not directly necessary for the service you've requested. They enable convenience features such as pre-filled text fields, live chat support, and optional forms, improving your browsing experience with services like single sign-on (SSO).",
    others: "These cookies do not fall into standard categories but serve various purposes. They may enhance specific website features or support experimental or temporary services, and are typically associated with minor functions or specialized needs. Without these, the website's core functionality remains unaffected, but certain experiences or experiments may be impacted."
}
    function createBanner(categorisedCookies, template) {
    let banner = `
    <div class="idfy-${template.bannerType}-AE1VSVI8T5" id="banner-home">
        <div class="banner-content-AE1VSVI8T5">
            <h2 class="banner-heading-AE1VSVI8T5">Cookie Notice</h2>
            <div class="${template.bannerType}-inner-AE1VSVI8T5">
                <p class="description-AE1VSVI8T5 ${template.bannerType}-desc-AE1VSVI8T5" >${template.contentDesktop.cookieNotice}</p>
                <div class="${template.bannerType}-button-container-AE1VSVI8T5">
                    <button onclick="submitConsent('all')" id="allow-btn-AE1VSVI8T5" class="${template.bannerType}-button-AE1VSVI8T5">${template.buttonsText.acceptAll}</button>
                    <button onclick="submitConsent('necessary')" class="${template.bannerType}-button-AE1VSVI8T5">${template.buttonsText.allowNecessary}</button>
                    <button id="customize-btn-AE1VSVI8T5" class="${template.bannerType}-button-AE1VSVI8T5">${template.buttonsText.moreSettings}</button>
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
                    <p class="box-description-AE1VSVI8T5">${template.contentDesktop.preferenceManager}</p>
                    <div class="categories-AE1VSVI8T5">
                    ${Object.keys(categorisedCookies).map(category => {
                        const cookieData = categorisedCookies[category];
                        const isNecessary = category === 'necessary';
                        const disabledClass = isNecessary ? 'disabled' : '';
                        return `
                        <div class="category-AE1VSVI8T5">
                            <div class="category-header-AE1VSVI8T5">
                                <div onclick="showDropdown('${category}')" style="cursor:pointer">
                                    <button class="dropdown-arrow-AE1VSVI8T5 rotated-AE1VSVI8T5 dropdown-arrow-${category}">^</button>
                                    <label for="${category}">${category.charAt(0).toUpperCase() + category.slice(1)} Cookies</label>
                                </div>
                                <input type="checkbox" id="${category}-toggle" class="toggle-switch-AE1VSVI8T5" ${isNecessary ? 'checked disabled' : ''} ${disabledClass}>
                                <label for="${category}-toggle" class="toggle-label-AE1VSVI8T5 ${disabledClass}"></label>
                            </div>
                            <div id="dropdown-${category}" class="dropdown-content-AE1VSVI8T5">
                                <div class="category-description-AE1VSVI8T5">
                                    ${categoryDescriptions[category]}
                                </div>
                                <div onclick="viewCookies('${category}')" id="view-cookies-${category}" class="view-cookies-AE1VSVI8T5">View Cookies</div>
                            </div>
                            <div class="show-cookies-AE1VSVI8T5 show-cookies-AE1VSVI8T5-${category}">
                                <div id="all-cookies-AE1VSVI8T5-${category}" class="all-cookies-AE1VSVI8T5">
                                    ${cookieData.map(cookie => `
                                    <div class="cookie-AE1VSVI8T5">
                                        <p class="cookie-name-AE1VSVI8T5"><span> Name </span>: ${cookie.cookie_name}</p>
                                        <p class="platform-AE1VSVI8T5"><span>Platform </span>: ${cookie.platform}</p>
                                    </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        `;
                    }).join('')}
                    </div>
                </div>
            </div>

            <div class="bottom-panel-AE1VSVI8T5">
                <div class="preference-button-AE1VSVI8T5">
                    <button onclick="submitConsent('preference')" class="button1-AE1VSVI8T5">${template.buttonsText.savePreferences}</button>
                    <button onclick="submitConsent('necessary')" class="button2-AE1VSVI8T5">${template.buttonsText.allowNecessary}</button>
                </div>
                <div class="powered-AE1VSVI8T5">
                    Powered by <span><a href="https://www.privyone.com/" target="_blank">PRIVY</a></span>
                </div>
            </div>
        </div>
    </div>
    `;

    return banner;
}
    

            function submitConsent(agreedCategories) {
                console.log('agreedCategories', agreedCategories)
                const agreedCookies = [];
                const cookieConsent = {
                    "analytics": true,
                    "marketing": true,
                    "functional": true
                }
    
                if (agreedCategories === 'all') {
                    Object.keys(cookieConsent).forEach(key => cookieConsent[key] = true);
                } else if (agreedCategories === 'necessary') {
                    Object.keys(cookieConsent).forEach(key => cookieConsent[key] = key === 'necessary');
                } else if (agreedCategories === 'preference') {
                    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
                    checkedBoxes.forEach(box => {
                        const categoryName = box.id.replace('-toggle', '');
                        agreedCookies.push(categoryName);
                        cookieConsent[categoryName] = true;
                    });
                    Object.keys(cookieConsent).forEach(key => cookieConsent[key] = agreedCookies.includes(key));
                }
    
                cookieConsent.update = true;
                toggleBanner('hide');
                document.cookie = `privyConsent=${JSON.stringify(cookieConsent)}; path=/`;
                localStorage.setItem("privyConsent", JSON.stringify(cookieConsent));
                console.log(cookieConsent)
                fetch(`https://privy-cookie-manager.idfystaging.com/ext/cookie-banner/d564c8ed-234e-491d-bdb3-bcae4a8064d3/cce6bd71-206f-43ed-9076-ec4cfc50a928`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_preference: cookieConsent })
                })
                .then(response => {
                    console.log("submit response", response);
                    if (!response.ok) {
                        console.log('Failed to submit consent');
                    }
                    return response.json();
                })
                .catch(error => {
                    console.log('Error submitting consent:', error);
                });
    
                // location.reload();
            }
        

    function blockIframe() {
    const iframeElements = document.querySelectorAll('iframe');
    iframeElements.forEach(iframe => {
        const src = iframe.getAttribute('src');
        if (src) {
            iframe.setAttribute('data-src', src);
            iframe.removeAttribute('src');
        }
    });
}

function blockScript() {
    const scriptElements = document.querySelectorAll('script');

    scriptElements.forEach(script => {
        if (!script.hasAttribute('type')) {
            script.setAttribute('type', 'text/plain');
        } else {
            script.setAttribute('type', 'text/plain');
            console.log(script.outerHTML);
        }
    });
}
    
 window.onload = () =>  {
    const categories = Object.keys(categorisedCookies);

    let consentCookie = JSON.parse(getCookieValue('privyConsent'));
    if (!consentCookie) {
        let cookie = {};
        for (let key of categories) {
            if (key === 'necessary') {
                cookie[key] = true;
            } else {
                cookie[key] = false;
            }
        }
        cookie.update = false;
        document.cookie = `privyConsent=${JSON.stringify(cookie)}; path=/`;
        localStorage.setItem("privyConsent", JSON.stringify(cookie));
        // location.reload();
    }
    consentCookie = JSON.parse(getCookieValue('privyConsent'));

    let consentButtonDiv = document.createElement('div');
    consentButtonDiv.className = "consent-button-AE1VSVI8T5";
    document.body.appendChild(consentButtonDiv);

    const banner = createBanner(categorisedCookies, template, consentCookie);
    const bannerContainer = document.createElement('div');
    bannerContainer.className = "banner-container-AE1VSVI8T5";
    bannerContainer.innerHTML = banner;
    document.body.appendChild(bannerContainer);

    let horizontal = "flex-end", leftRight = "right", vertical = "bottom";
    // if (template.horizontalAlign == "left") {
    //     horizontal = "flex-start";
    //     leftRight = "left";
    // }
    // if (template.verticalAlign == "top") {
    //     vertical = "top";
    // }

    if (template.positionDesktop.includes("left")) {
        horizontal = "flex-start";
        leftRight = "left";
    }
    if (template.positionDesktop.includes("top")) {
        vertical = "top";
    }

    const styleTag = document.createElement("style");
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
  
          .idfy-box-AE1VSVI8T5 {
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
            margin:10px 10px 10px 0px !important;
            font-weight:normal !important;
          }
  
          .banner-button-container-AE1VSVI8T5,.box-button-container-AE1VSVI8T5 {
              text-align: right!important;
              margin-top: 10px!important;
          }
  
          .classic-button-AE1VSVI8T5,.banner-button-AE1VSVI8T5{
              margin-right: 2.5px !important;
              color: ${template.buttonColor} !important;
              padding: 9px 20px !important;
              border: 1px solid ${template.buttonColor} !important;
              border-radius: 8px !important;
              background: white !important;
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
              background-color:${template.buttonColor} !important;
              color: ${template.buttonTextColor}!important;
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
              color: ${template.butonTextColor} !important;
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
              background-color: ${template.hoverButtonColor} !important;
              color: ${template.hoverTextColor} !important;
              transition: 0.3s;
              border: 1px solid ${template.hoverButtonColor} !important;
          }
  
          .powered-AE1VSVI8T5 {
              text-align: right;
              background-color: #F3F3F4;
              font-size: 10px !important;
              padding: 1px 10px !important;
              margin:0px !important;
              color: #7D8187 !important;
              font-weight:normal !important;
              line-height:1 !important;
          }
  
          .powered-AE1VSVI8T5 a {
              color: #1C43B9 !important;
              font-weight: bold !important;
              text-decoration:none !important;
              font-size: 10px!important;
              line-height:1 !important;
            } 
  
          @media (max-width: 900px) {
            .box-button-container-AE1VSVI8T5{
              text-align: center!important;
            }
            .box-button-AE1VSVI8T5 {
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
    document.head.appendChild(styleTag);

    const scriptTag = document.createElement("script");
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
    document.head.appendChild(scriptTag);

    if (consentCookie.update === false) {
        toggleBanner('show');
    } else {
        toggleBanner('hide');
    }
}
