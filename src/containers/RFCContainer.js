import React, { useState } from 'react';
import RFC from '../pages/RFC';

const RFCContainer = () =>{
    const [rfc, setRFC] = useState("**********-###");
    const [form, setForm] = useState({nombre: '', paterno:'',materno:'',fechaNacimiento:''});

    const onChange = (e) =>{
        let inwords = ["BUEI", "CACA", "CAGA", "CAKA", "COGE", "COJE", "COJO", "FETO", "JOTO", "KACO", 
                        "KAGO", "KOJO", "KULO", "MAMO", "MEAS", "MION", "MULA", "PEDO", "PUTA", "QULO",
                        "RUIN", "BUEY", "CACO", "CAGO", "CAKO", "COJA", "COJI", "CULO", "GUEY", "KACA",
                        "KAGA", "KOGE", "KAKA", "MAME", "MEAR", "MEON", "MOCO", "PEDA", "PENE", "PUTO", "RATA"];
        let name = e.target.name;
        let value = String( e.target.value ).toUpperCase();
        setForm({...form, [name] : value});
        
        if( name === "nombre" ){
            
            let sub1 = rfc.substring(0,3);
            let sub2 = rfc.substring(4, 14);
            if( value.length === 1 ){
                let nombre = value.substring(0, 1);
                setRFC( sub1 + nombre  + sub2 );
            }
            else if( value.length < 2 ){
                setRFC(sub1 + "*" + sub2 );
            }
            if(rfc.substring(0,4).length >= 0){
                let subA = rfc.substring(0,3);
                let subB = rfc.substring(4, 14);
                inwords.forEach(element => {
                    if (element === rfc.substring(0,4)){
                        setRFC(subA+"X"+subB);
                    }
                });
            }
        }
        else if( name === "paterno" ){
            //Nos traemos el substring desde donde iniciamos hasta 1 posición depués de terminar.
            let sub = rfc.substring(2,14);
            if( value.length === 2 ){
                let paterno = value.substring(0, 2);
                setRFC( paterno + "" + sub );
            }
            else if( value.length < 2 ){
                setRFC("**" + sub );
            }
            if(rfc.substring(0,4).length >= 0){
                let subA = rfc.substring(0,3);
                let subB = rfc.substring(4, 14);
                inwords.forEach(element => {
                    if (element === rfc.substring(0,4)){
                        setRFC(subA+"X"+subB);
                    }
                });
            }
        }
        else if( name === "materno" ){
            let sub1 = rfc.substring(0,2);
            let sub2 = rfc.substring(3, 14);
            if( value.length === 1 ){
                let materno = value.substring(0, 1);
                setRFC( sub1 + materno + sub2 );
            }
            else if( value.length < 2 ){
                setRFC(sub1 + "*" + sub2 );
            }
            if(rfc.substring(0,4).length >= 0){
                let subA = rfc.substring(0,3);
                let subB = rfc.substring(4, 14);
                //let subC = rfc.substring(0,4);
                inwords.forEach(element => {
                    if (element === rfc.substring(0,4)){
                        setRFC(subA+"X"+subB);
                    }
                });
            }
        }
        else{
            let sub1 = rfc.substring(0,4);
            let sub2 = rfc.substring(10, 14);
            let arr = value.split("-");
            setRFC( sub1 + arr[0].substring(2,5) + arr[1] + arr[2] + sub2 );
            // aaaa - mm - dd
        }
    }

    return(
        <RFC 
            rfc={rfc} 
            form={form} 
            onChange={onChange} 
        />
    )
};

export default RFCContainer;