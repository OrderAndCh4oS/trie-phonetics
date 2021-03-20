const fs = require('fs')

function getNRandomWords(languageCode, n = 100) {

    const words = [];
    let response = fs.readFileSync(`./translations/${languageCode}.txt`, 'UTF-8');

    const lines = response.split(/\r?\n/);

    for(const line of lines) {
        const [word, phonetic] = line.split(/\t/);
        if(!word) continue;
        words.push([word, phonetic])
    }
    return nRandomChoices(words, n);
}

function nRandomChoices(arr, n) {
    const chosen = [];
    const result = [];
    for (let i = 0; i < n; i++) {
        let randInt;
        do {
            randInt = ~~(Math.random() * arr.length);
        } while(randInt in chosen);
        chosen.push(randInt);
        result.push(arr[randInt])
    }
    return result;
}

console.log(getNRandomWords('fr_FR', n = 100));

const randomDeWords = [
    [ 'Friedenspfeifen', '/ˈfɾiːdɛnzpfaefən/' ],
    [ 'vorgesagten', '/foːɐ̯gəˈzaktən/' ],
    [ 'einklammerndes', '/ˈʔaenˌklammɛɾndəs/' ],
    [ 'allfälliges', '/ˈʔallfɛllɪgəs/' ],
    [ 'türmten', '/ˈtʏɾmtən/' ],
    [ 'verschreibst', '/fɛːɐ̯ˈʃɾaepst/' ],
    [ 'starrsinnigen', '/ˈʃtaɾɾzɪnnɪgən/' ],
    [ 'Entmutigungen', '/ʔɛntˈmuːtɪgʊŋən/' ],
    [ 'salzigeren', '/ˈzaltsɪgɐ̯ən/' ],
    [ 'vorwegnahmst', '/foːɐ̯ˈvɛkˌnɑmst/' ],
    [ 'luftdichte', '/ˈlʊftˌdɪçtə/' ],
    [ 'einzusparenden', '/ʔaenˈtsuːˌʃpɑːɾɛndən/' ],
    [ 'ausdrehender', '/ˈʔaosˌdɾeːɛndɐ̯/' ],
    [ 'eingeht', '/ʔaengəˈht/' ],
    [ 'ansprecht', '/ˈʔanˌʃpɾɛçt/' ],
    [ 'fünfjährigen', '/ˈfʏnfjɛɾɪgən/' ],
    [ 'Parlamentsbeschlüssen', '/ˈpaɾlɑmɛntsbɛʃlʏszən/' ],
    [ 'unschmackhafteren', '/ˈʔʊnˌʃmakhaftɐ̯ən/' ],
    [ 'Erhalts', '/ʔɛːɐˈhalts/' ],
    [ 'Schadensersatzes', '/ˈʃɑːdɛnzɛɾzatsəs/' ],
    [ 'ungewöhnliche', '/ʔʊngəˈvønlɪçə/' ],
    [ 'abholt', '/ˈʔapˌhɔlt/' ],
    [ 'waghalsigeres', '/ˈvakalzɪgɐ̯əs/' ],
    [ 'unbeschäftigteres', '/ʔʊnbəˈʃɛftɪktɐ̯əs/' ],
    [ 'setzende', '/ˈzɛtsɛndə/' ],
    [ 'anschwindeln', '/ˈʔanˌʃvɪndɛln/' ],
    [ 'loslassende', '/ˈlɔslaszɛndə/' ],
    [ 'abzuwendenden', '/ʔapˈtsuːˌvɛndɛndən/' ],
    [ 'böserer', '/ˈbøːzɐ̯ɐ̯/' ],
    [ 'welterfahrene', '/ˈvɛltɛɾfɑɾənə/' ],
    [ 'Verbots', '/fɛːɐ̯ˈbɔts/' ],
    [ 'verstehend', '/fɛːɐ̯ˈʃteːɛnt/' ],
    [ 'unverzichtbares', '/ʔʊnfɛːɐ̯tsɪçtˈbaɽəs/' ],
    [ 'durchgebissenem', '/ˈdʊɾtsgebɪszənəm/' ],
    [ 'abgebrachte', '/ʔapgəˈbraxtə/' ],
    [ 'Stichpunkt', '/ˈʃtɪçpʊŋkt/' ],
    [ 'Update', '/ˈʔʊpdɑtə/' ],
    [ 'Schirmherrin', '/ˈʃɪɾmɛɾɾɪn/' ],
    [ 'hereinführt', '/hɛˈɾaenˌfyɾt/' ],
    [ 'anzunäherndem', '/ʔanˈtsuːˌnɛːɛɾndəm/' ],
    [ 'reinwaschendes', '/ˈɾaenvaʃɛndəs/' ],
    [ 'aufheizende', '/ˈʔaofˌhaetsɛndə/' ],
    [ 'wegjagend', '/ˈvɛkˌjɑːgɛnt/' ],
    [ 'Ärztinnen', '/ˈʔɛɾtstɪnnən/' ],
    [ 'hereinragen', '/hɛˈɾaenˌɾɑːgən/' ],
    [ 'überwerfende', '/ˈʔyːbɛɾvɛɾfɛndə/' ],
    [ 'Töpfer', '/ˈtœpfər/' ],
    [ 'Furcht', '/fʊʁçt/' ],
    [ 'zimperlicheren', '/ˈtsɪmpɐ̯lɪçɐ̯ən/' ],
    [ 'vergönnst', '/fɛːɐ̯ˈgœnnst/' ],
    [ 'Höchstgeschwindigkeit', '/hœçstgɛʃvɪndɪkˈkəiːt/' ],
    [ 'Kamelstuten', '/ˈkɑːmɛlstutən/' ],
    [ 'verfassungswidrigeren', '/fɛːɐ̯ˈfaszʊŋsvɪdɾɪgɐ̯ən/' ],
    [ 'Formstahl', '/ˈfɔɾmstɑl/' ],
    [ 'unerreichbar', '/ʔʊnʔɛːɐɾaeçˈbaɽ/' ],
    [ 'westdeutschen', '/ˈvɛstˌdɔøʧən/' ],
    [ 'stenographischer', '/ˈʃteːnɔgɾafɪʃɐ̯/' ],
    [ 'berüchtigtestes', '/bəˈɾʏçtɪktɛstəs/' ],
    [ 'versiegelt', '/fɛːɐ̯ˈziːgɛlt/' ],
    [ 'Findelhaus', '/ˈfɪndɛlaos/' ],
    [ 'beschaulichsten', '/bəˈʃaolɪçstən/' ],
    [ 'frecher', '/ˈfɾɛçɐ̯/' ],
    [ 'Autorenrecht', '/ˈaotoɾɛnɾɛçt/' ],
    [ 'Arbeitsprozess', '/ˈʔaɾbaetspɾotsɛss/' ],
    [ 'verzagend', '/fɛːɐ̯ˈtsɑːgɛnt/' ],
    [ 'hinführst', '/ˈhɪnˌfyɾst/' ],
    [ 'ausrückte', '/ˈʔaosˌɾʏktə/' ],
    [ 'hineinzulesende', '/hɪˈnaenˈtsuːˌleːzɛndə/' ],
    [ 'Goldkäufen', '/ˈgɔltkɔøfən/' ],
    [ 'teilnahmsloseres', '/ˈtaelnɑmsloːsɐ̯əs/' ],
    [ 'Umschiffungen', '/ˈʔʊmˌʃɪffʊŋən/' ],
    [ 'Bergarbeiterschaft', '/bəˈɾgaɾbaetɛɾstshaft/' ],
    [ 'Gesamtleistungen', '/gəzamtˈləɪstʊŋən/' ],
    [ 'stechende', '/ˈʃtɛçɛndə/' ],
    [ 'Terme', '/ˈtɛɾmə/' ],
    [ 'aufgelistetes', '/ʔaofgəˈlɪstətəs/' ],
    [ 'zustatten', '/ˈtsuːˌʃtatən/' ],
    [ 'unterschreite', '/ˈʔʊntɛɾstsˈɾəiːtə/' ],
    [ 'zurückzuzahlendes', '/ˈtsuːˌɾʏktsutsɑlɛndəs/' ],
    [ 'Betriebsferien', '/bətɾiːpsˈfɐ̯iːən/' ],
    [ 'Artikulation', '/ʔaɾtikulɑˈtsĭoːn/' ],
    [ 'schieferer', '/ˈʃiːfɐ̯ɐ̯/' ],
    [ 'Spezifikationssprache', '/ˈʃpeːtsifikɑtsĭonsspɾaxə/' ],
    [ 'Indices', '/ˈʔɪnditsəs/' ],
    [ 'Falkenjagd', '/ˈfalkɛnjakt/' ],
    [ 'verschraubendes', '/fɛːɐ̯ˈʃɾaobɛndəs/' ],
    [ 'mitgehörtes', '/mɪtgəˈhœɾtəs/' ],
    [ 'unentrinnbaren', '/ʔʊnʔɛntɾɪnnˈbaɽən/' ],
    [ 'nichtproportionalen', '/nɪçtpɾopɔɾˈtsĭoːnalən/' ],
    [ 'Ehrensachen', '/ˈʔeɾɛnzaxən/' ],
    [ 'Ausbildungsteile', '/ˈʔaosbɪldʊŋstəiːlə/' ],
    [ 'gewehtes', '/gəˈvetəs/' ],
    [ 'dazulernend', '/daˈtsuːˌlɛɾnɛnt/' ],
    [ 'exponiertester', '/ˈʔɛksponiːɾtɛstɐ̯/' ],
    [ 'anwinkle', '/ˈʔanˌvɪŋklə/' ],
    [ 'Ausschusses', '/ˈʔaosˌʃʊszəs/' ],
    [ 'abgreife', '/ˈʔapˌgɾaefə/' ],
    [ 'ausmessendes', '/ˈʔaosˌmɛszɛndəs/' ],
    [ 'eintönig', '/ˈʔaenˌtøːnɪç/' ],
    [ 'strukturiertet', '/ʃtɾʊkˈtuːɐiːɾtət/' ]
]

const randomFrWords = [
    [ 'préluderais', '/pʁelydəʁɛ/' ],
    [ 'dédommagé', '/dedɔmaʒe/' ],
    [ 'ceignîmes', '/sɛɲim/' ],
    [ 'inquisitoire', '/ɛ̃kizitwaʁ/' ],
    [ 'dégradèrent', '/degʁadɛʁ/' ],
    [ 'tournicotions', '/tuʁnikɔtjɔ̃/' ],
    [ 'écoutais', '/ekutɛ/' ],
    [ 'transportai', '/tʁɑ̃spɔʁtɛ/' ],
    [ 'gambadez', '/gɑ̃bade/' ],
    [ 'confinements', '/kɔ̃finmɑ̃/' ],
    [ 'enkysteraient', '/ɑ̃kistəʁɛ/' ],
    [ 'subsistâtes', '/sybzistat/' ],
    [ 'cri', '/kʁi/' ],
    [ 'feu', '/fø/' ],
    [ 'management', '/manadʒmɛnt/' ],
    [ 'lambinée', '/lɑ̃bine/' ],
    [ 'tartinaient', '/taʁtinɛ/' ],
    [ 'insérerai', '/ɛ̃seʁəʁɛ/' ],
    [ 'ristournassent', '/ʁistuʁnas/' ],
    [ 'déplomberont', '/deplɔ̃bəʁɔ̃/' ],
    [ 'pensèrent', '/pɑ̃sɛʁ/' ],
    [ 'rassirez', '/ʁasiʁe/' ],
    [ 'procréerons', '/pʁɔkʁeəʁɔ̃/' ],
    [ 'caillions', '/kajɔ̃/' ],
    [ 'approuvées', '/apʁuve/' ],
    [ 'cloqués', '/klɔke/' ],
    [ 'mousson', '/musɔ̃/' ],
    [ 'cloisonnâtes', '/klwazɔnat/' ],
    [ 'encapuchonnions', '/ɑ̃kapyʃɔnjɔ̃/' ],
    [ 'lénifiasse', '/lenifjas/' ],
    [ 'cadastrées', '/kadastʁe/' ],
    [ 'camionnais', '/kamjɔnɛ/' ],
    [ 'définitives', '/definitiv/' ],
    [ 'métis', '/metis/' ],
    [ 'kaléidoscopes', '/kaleidɔskɔp/' ],
    [ 'regorgèrent', '/ʁəgɔʁʒɛʁ/' ],
    [ 'dépraverait', '/depʁavəʁɛ/' ],
    [ 'rassiriez', '/ʁasiʁje/' ],
    [ 'mouillants', '/mujɑ̃/' ],
    [ 'gondolière', '/gɔ̃dɔljɛʁ/' ],
    [ 'rebrousses', '/ʁəbʁus/' ],
    [ 'acquittât', '/akita/' ],
    [ 'replâtrait', '/ʁəplatʁɛ/' ],
    [ 'arrivât', '/aʁiva/' ],
    [ 'roulée', '/ʁule/' ],
    [ 'débusqueras', '/debyskəʁa/' ],
    [ 'subvertirai', '/sybvɛʁtiʁɛ/' ],
    [ 'bouchèrent', '/buʃɛʁ/' ],
    [ 'emmitouflerons', '/ɑ̃mitufləʁɔ̃/' ],
    [ 'dirigeante', '/diʁiʒɑ̃t/' ],
    [ 'robotiserais', '/ʁɔbɔtizəʁɛ/' ],
    [ 'grimons', '/gʁimɔ̃/' ],
    [ 'menasses', '/mənas/' ],
    [ 'polycopierais', '/pɔlikɔpjəʁɛ/' ],
    [ 'sacrifièrent', '/sakʁifjɛʁ/' ],
    [ 'réabonnons', '/ʁeabɔnɔ̃/' ],
    [ 'hégélien', '/egeljɛ̃/' ],
    [ 'déshydraté', '/dezidʁate/' ],
    [ 'conciliassions', '/kɔ̃siljasjɔ̃/' ],
    [ 'parasitisme', '/paʁazitism/' ],
    [ 'enorgueillissiez', '/ɑ̃nɔʁgœjisje/' ],
    [ 'insensées', '/ɛ̃sɑ̃se/' ],
    [ 'décongèles', '/dekɔ̃ʒɛl/' ],
    [ 'espérerai', '/ɛspeʁəʁɛ/' ],
    [ 'sauvette', '/sovɛt/' ],
    [ 'votants', '/vɔtɑ̃/' ],
    [ 'accastilleront', '/akastijəʁɔ̃/' ],
    [ 'transbahutât', '/tʁɑ̃sbayta/' ],
    [ 'accédés', '/aksede/' ],
    [ 'tournicoterai', '/tuʁnikɔtəʁɛ/' ],
    [ 'délirerait', '/deliʁəʁɛ/' ],
    [ 'bagarraient', '/bagaʁɛ/' ],
    [ 'mâchât', '/maʃa/' ],
    [ 'décomplexent', '/dekɔ̃plɛks/' ],
    [ 'rempli', '/ʁɑ̃pli/' ],
    [ 'abreuvait', '/abʁœvɛ/' ],
    [ 'acidités', '/asidite/' ],
    [ 'bouclent', '/bukl/' ],
    [ 'grognait', '/gʁɔɲɛ/' ],
    [ 'pensionnas', '/pɑ̃sjɔna/' ],
    [ 'quadrillé', '/kadʁije/' ],
    [ 'vivez', '/vive/' ],
    [ 'succombés', '/sykɔ̃be/' ],
    [ 'aménager', '/amenaʒe/' ],
    [ 'subjuguerait', '/sybʒygəʁɛ/' ],
    [ 'instituée', '/ɛ̃stitɥe/' ],
    [ 'redémarrée', '/ʁədemaʁe/' ],
    [ 'éliminassions', '/eliminasjɔ̃/' ],
    [ 'adressons', '/adʁɛsɔ̃/' ],
    [ 'refilassions', '/ʁəfilasjɔ̃/' ],
    [ 'forages', '/fɔʁaʒ/' ],
    [ 'consciente', '/kɔ̃sjɑ̃t/' ],
    [ 'cartonneuse', '/kaʁtɔnøz/' ],
    [ 'extrémisme', '/ɛkstʁemism/' ],
    [ 'redescende', '/ʁədesɑ̃d/' ],
    [ 'réservé', '/ʁezɛʁve/' ],
    [ 'ensachassiez', '/ɑ̃saʃasje/' ],
    [ 'handicaperai', '/ʼɑ̃dikapəʁɛ/' ],
    [ 'nacreraient', '/nakʁəʁɛ/' ],
    [ 'existaient', '/ɛgzistɛ/' ]
]
