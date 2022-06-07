const userInfoService = {
    changeColorTheme: (className: string, colorTheme: string): void => {

        const mainElement = document.getElementsByClassName(className)[0] as HTMLElement;

        if (colorTheme === 'light') {

            mainElement?.classList.remove('darkBg');
            mainElement?.classList.add('lightBg');
        } else {
            mainElement?.classList.remove('lightBg');
            mainElement?.classList.add('darkBg');
        }
    }
}

export {
    userInfoService
}