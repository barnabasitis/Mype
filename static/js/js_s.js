function loadFuncntions(){
    menuButton = document.querySelector('.menu-btn');
    menuButton.addEventListener('click', displayMobileMenuBar);

    aboutMype = document.querySelector('.about-mype');
    mbAboutMype = document.querySelector('.mb-about-mype');
    aboutMype.addEventListener('click', displayAbout);
    mbAboutMype.addEventListener('click', displayAbout);

    closeAbout = document.querySelector('.close');
    closeAbout.addEventListener('click', closeAboutFunc);

    closeFaqs = document.querySelector('.close-faqs');
    closeFaqs.addEventListener('click', closeFaqsFunc);

    faqsBtn = document.querySelector('.faqs-mype');
    faqsBtn.addEventListener('click', displayFaqs);

    faqsMbBtn = document.querySelector('.mb-faqs-mype');
    faqsMbBtn.addEventListener('click', displayFaqs);

    featuresBtn = document.querySelector('.features');
    featuresBtn.addEventListener('click', displayFeatures);

    featuresBtn = document.querySelector('.mb-features');
    featuresBtn.addEventListener('click', displayFeatures);

    closeFeatures = document.querySelector('.close-features');
    closeFeatures.addEventListener('click', closeFeaturesFunc);

    footerAbout = document.querySelector('.footer-about');
    footerAbout.addEventListener('click', displayAbout);

    footerFaqs = document.querySelector('.footer-faqs');
    footerFaqs.addEventListener('click', displayFaqs);

    footerFeatures = document.querySelector('.footer-features');
    footerFeatures.addEventListener('click', displayFeatures);

    downloadBtn1 = document.querySelector('.download-btn');
    downloadBtn1.addEventListener('click', () => {
        downloadContent = document.querySelector('.download-d');
        downloadContent.classList.add('display');
        closeDownload = document.querySelector('.close-download');
        closeDownload.addEventListener('click', () => {
            downloadContent.classList.remove('display');
        });
    });

    downloadBtn2 = document.querySelector('.web-card-download');
    downloadBtn2.addEventListener('click', () => {
        downloadContent = document.querySelector('.download-d');
        downloadContent.classList.add('display');
        closeDownload = document.querySelector('.close-download');
        closeDownload.addEventListener('click', () => {
            downloadContent.classList.remove('display');
        });
    });

    downloadBtn3 = document.querySelector('.web-card-download-t');
    downloadBtn3.addEventListener('click', () => {
        downloadContent = document.querySelector('.download-d');
        downloadContent.classList.add('display');
        closeDownload = document.querySelector('.close-download');
        closeDownload.addEventListener('click', () => {
            downloadContent.classList.remove('display');
        });
    });

    downloadBtn4 = document.querySelector('.download-btn-g');
    downloadBtn4.addEventListener('click', () => {
        downloadContent = document.querySelector('.download-d');
        downloadContent.classList.add('display');
        closeDownload = document.querySelector('.close-download');
        closeDownload.addEventListener('click', () => {
            downloadContent.classList.remove('display');
        });
    });

    downloadBtn5 = document.querySelector('.mb-download-btn');
    downloadBtn5.addEventListener('click', () => {
        downloadContent = document.querySelector('.download-d');
        downloadContent.classList.add('display');
        closeDownload = document.querySelector('.close-download');
        closeDownload.addEventListener('click', () => {
            downloadContent.classList.remove('display');
        });
    });

    getStarted1 = document.querySelector('.get-started-btn');
    getStarted1.addEventListener('click', () => {
        downloadContent = document.querySelector('.download-d');
        downloadContent.classList.add('display');
        closeDownload = document.querySelector('.close-download');
        closeDownload.addEventListener('click', () => {
            downloadContent.classList.remove('display');
        });
    });

    getStarted2 = document.querySelector('.get-started-btn-t');
    getStarted2.addEventListener('click', () => {
        downloadContent = document.querySelector('.download-d');
        downloadContent.classList.add('display');
        closeDownload = document.querySelector('.close-download');
        closeDownload.addEventListener('click', () => {
            downloadContent.classList.remove('display');
        });
    });

    emailInput = document.querySelector('.email');
    emailInput.addEventListener('focus', () => {
        emailInput.classList.add('change-style');
    });
    emailInput.addEventListener('input', () => {
        emailInput.classList.add('input');
    });
    emailInput.addEventListener('emptied', () => {
        emailInput.classList.remove('input')
    });
}

function displayMobileMenuBar(){
    mobileMenu = document.querySelector('.mobile-navbar-menu');
    mobileMenu.classList.toggle('display-menu');
}

function displayAbout(){
    mobileMenu = document.querySelector('.about');
    mobileMenu.classList.add('display');
}

function closeAboutFunc(){
    mobileMenu = document.querySelector('.about');
    mobileMenu.classList.remove('display');
}

function displayFaqs(){
    faqsCnt = document.querySelector('.faqs');
    faqsCnt.classList.add('display');
}

function closeFaqsFunc(){
    closeFaqs = document.querySelector('.faqs');
    closeFaqs.classList.remove('display');
}

function displayFeatures(){
    features = document.querySelector('.features-d');
    features.classList.add('display');
}

function closeFeaturesFunc(){
    closeFaqs = document.querySelector('.features-d');
    closeFaqs.classList.remove('display');
}

function checkFocus(){
    alert("hello");
}

window.addEventListener('load', loadFuncntions);
