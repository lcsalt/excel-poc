export type AlertTypes = 'success' | 'warn' | 'error' | 'info' | 'custom';
type GetAlertSvgTypes = {type:AlertTypes, customColor:string | undefined | undefined, children:any}

export const getAlertSvg = ({type, customColor, children}: GetAlertSvgTypes) => {
    return alert[type].getAlertSvg(type, customColor, children);
}

const alert = {
    'success':{
        getAlertSvg: (type:AlertTypes, customColor:string | undefined) => {
            return(
                <div className={`mr-2 mt-0.5 sm:mt-0 base-alert-${type} ${customColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            )
        }
    },
    'warn':{
        getAlertSvg: (type:AlertTypes, customColor:string | undefined) => {
            return(
                <div className={`mr-2 mt-0.5 sm:mt-0 base-alert-${type} ${customColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
            )
        }
    },
    'error':{
        getAlertSvg: (type:AlertTypes, customColor:string | undefined) => {
            return(
                <div className={`mr-2 mt-0.5 sm:mt-0 base-alert-${type} ${customColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            )
        },
    },
    'info':{
        getAlertSvg: (type:AlertTypes, customColor:string | undefined) => {
            return(
                <div className={`mr-2 mt-0.5 sm:mt-0 base-alert-${type} ${customColor}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            )
        }
    },
    'custom': {
        getAlertSvg: (type:AlertTypes, customColor:string | undefined, children:any) =>{
            return(
                <div className={`mr-2 mt-0.5 sm:mt-0 base-alert-${type} ${customColor}`}>
                    {children}
                </div>
            )
        }
    }
}