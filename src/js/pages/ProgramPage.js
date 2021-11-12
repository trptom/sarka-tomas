import React from 'react';

import Locale from '../utils/Localization';

import Page from './Page';

import GuestService from '../services/GuestService';

class ProgramPage extends Page {
    getPage() {
        return (
            <div className="page-program">
                <p>
                    Budeme moc rádi, když s námi oslavíte náš svatební den, který
                    se uskuteční 24. července 2021. Doufáme, že na těchto stránkách
                    najdete vše, co budete potřebovat. Pokud budete mít nějaké jiné
                    dotazy, určitě se nám ozvěte &#128512;
                </p>
                
                <p>
                    Začátek samotného obřadu je naplánován na 11hod. Ti, kteří budou
                    chtít, mohou dorazit předem do Lhoty pod Radčem k nevěstě domů
                    (č.p. 57, hned na kraji vsi ve směru na Rokycany), tady bude možnost
                    se trochu občerstvit. Následně se přesuneme na zbirožský zámek,
                    kde bude v kapli probíhat obřad. Ti, kteří budou chtít dorazit
                    až na místo konání obřadu, určitě mohou. Podle dostupných informací
                    je možnost parkování na hotelovém parkovišti pro 5 vozidel. Budeme
                    se přímo na zámku ještě informovat, kde dále je možné parkovat.
                    Jakmile to zjistíme, napíšeme Vám sem bližší info. J Ti, kteří
                    přijedou přímo na místo konání obřadu, poprosíme o dochvilnost,
                    neboť by mohlo hrozit, že se obřadu nebudete moct zúčastnit.
                </p>
                
                <p>
                    Vzhledem k tomu, že se jedná o slavnostní den, budeme rádi,
                    když dorazíte v oblečení, které se k této události hodí.
                </p>
                
                <p>
                    Po obřadu se přesuneme všichni do Lhoty pod Radčem, kde proběhne
                    v místním pohostinství oběd a následná oslava našeho dne &#128512;
                </p>
                
                <p>
                    Protože se jedná o přesun mezi obcemi, je nám jasné, že ne všichni
                    budou mít tu možnost zařídit si vlastní dopravu. Ti z Vás, kteří
                    přijedou ať už vlakem do Kařeza, či autobusem do Zbiroha, a budou
                    potřebovat zajistit jakýkoliv odvoz, dejte nám vědět. Ideálně
                    vyplňte kontaktní formulář zde, na našich svatebních stránkách.
                    Pokud budete mít nějaké specifické požadavky na dopravu, napište
                    nám je a my Vás pak kontaktujeme, abychom se domluvili, co a jak
                    &#128512;
                </p>
                
                <p>
                    Stejně tak i s ubytováním. Předpokládáme, že to se bude týkat
                    především hostů, kteří pojedou zdaleka. Ozvěte se přes formulář,
                    že budete mít o zajištění ubytování zájem a detaily s Vámi
                    domluvíme. Poprosíme Vás však, abyste se nám ozvali co nejdříve.
                    Neboť pokud budete mít zájem o ubytování v některém z penzionů
                    v blízkém okolí, musíme pro Vás místa rezervovat co nejdříve.
                </p>
                
                <p>
                    Se svatebními dary si hlavy nelámejte, kvůli nim se rozhodně
                    nebereme. Budeme moc rádi, když si uděláte čas a tento den oslavíte
                    s námi. Pokud nám však budete chtít něco dát, oceníme velice, když
                    přispějete do našeho rodinného rozpočtu. Jak víte, stavíme
                    si rodinné hnízdo, kam se brzy budeme stěhovat. Nicméně toužíme
                    si veškeré vybavení (od skleniček až po domácí spotřebiče) vybrat
                    sami, nedělejte si tedy starosti s tím, co byste nám měli koupit.
                    &#128512;
                </p>
            </div>
        );
    }
}

export default ProgramPage;