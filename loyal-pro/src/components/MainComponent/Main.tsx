import React from 'react';
import cl from "./Main.module.sass"
import {Button} from "./ButtonComponent/Button";
import imageMain from "../../asserts/imageMain.png"
import {Circle} from "./CircleComponent/Circle";

export const Main = () => {
    return (
        <main className={cl.main}>
            <div className={cl.mainInfo}>
                <div className={cl.desc}>

                    <span className={cl.descInfoBig}>
                        Эффективная система для управления бизнесом
                    </span>

                    <span className={cl.descInfoLittle}>
                        Привлекайте клиентов, увеличивайте прибыль,
                        и управляйте большими системами
                    </span>

                    <div className={cl.buttonGroupOne}>
                        <Button nameButton={'Зарегистрироваться'}/>
                        <Button nameButton={'Войти как клиент'}/>
                    </div>

                    <div className={cl.businessTypes}>
                        <Circle forWhat={'Для ИП'}/>
                        <Circle forWhat={'Для малого бизнеса'}/>
                        <Circle forWhat={'Для крупного бизнеса'}/>
                    </div>
                    
                </div>
            </div>
            <img src={imageMain} alt="" className={cl.imageMain}/>
        </main>
    );
};

