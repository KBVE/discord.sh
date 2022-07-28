
/** HashString Interface */
export type HashString = string | number | null | undefined;

/** From John at https://stackoverflow.com/questions/56952405/how-to-decode-encode-string-to-base64-in-typescript-express-server */
export const decode64 = (str: string):string => Buffer.from(str, 'base64').toString('binary');
export const encode64 = (str: string):string => Buffer.from(str, 'binary').toString('base64');

export const HashStringDecodeB64 = (hs: HashString) => {

    if (typeof hs === "string") {
        
        //let h = atob(hs);
        let h = hs.replace('#', '');
        h = decode64(hs);

        return h;
    }

    return '';
}


export const HashStringEncodeB64 = (hs: HashString) => {

    if (typeof hs === "string") {
           
            //const h = btoa(hs);
            let h = hs.replace('#', '');
            h = encode64(hs);
           
           return h;
    }
   
    return '';
}
     
  

export default HashString;