// script.js
document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
        //Försignaler 
            question: "Försignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/fsignalstopp.gif",
            options: ["Vänta stopp", "Kör 80", "Vänta, kör 40", "Ingen signal"],
            answer: "Vänta stopp"
        },
        { 
            question: "Försignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/fsignalkor.gif",
            options: ["Vänta stopp", "Vänta, kör 80", "Vänta, kör 40", "Ingen signal"],
            answer: "Vänta, kör 80"
        },
        { 
            question: "Försignaler 3",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/fsignalkor40.gif",
            options: ["Vänta stopp", "Kör 80", "Vänta kör 40", "Ingen signal"],
            answer: "Vänta kör 40"
        },

        //Huvudsignaler
        { 
            question: "Huvudsignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hsignalstopp.gif",
            options: ["Stopp", "Kör 80", "Vänta, kör 40 varsamt", "Ingen signal"],
            answer: "Stopp"
        },
        { 
            question: "Huvudsignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hsignalkor.gif",
            options: ["Vänta stopp", "Kör 80", "kör 40", "kör 100"],
            answer: "Kör 80"
        },
        { 
            question: "Huvudsignaler 3",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hsignalkor40.gif",
            options: ["Kör 60, varsamhet (högsta hastighet 60km/h)", "Kör 80", "Kör 40, varsamhet (högsta hastighet 40km/h)", "Kör 100"],
            answer: "Kör 40, varsamhet (högsta hastighet 40km/h)"
        },

        //kombinerade huvud- och försignaler
        { 
            question: "Kombinerade huvud- och försignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hfsignalstopp.gif",
            options: ["Stopp", "Kör 80", "Kör 40, varsamhet (högsta hastighet 40km/h)", "Kör 100"],
            answer: "Stopp"
        },
        { 
            question: "Kombinerade huvud- och försignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hfsignalkor40.gif",
            options: ["Kör 60, varsamhet (högsta hastighet 60km/h)", "Kör 80", "Kör 40", "Kör 100"],
            answer: "Kör 40"
        },
        { 
            question: "Kombinerade huvud- och försignaler 3",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hfsignalkornastastopp.gif",
            options: ["Kör 60, varsamhet (högsta hastighet 60km/h)", "Kör 80", "Kör 80, vänta stopp", "Kör 100"],
            answer: "Kör 80, vänta stopp"
        },
        { 
            question: "Kombinerade huvud- och försignaler 4",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hfsignalkortvag.gif",
            options: ["Kör 40, avkortad tågväg", "Kör 80", "Kör 80, vänta stopp", "Kör 100"],
            answer: "Kör 40, avkortad tågväg"
            
        },
        { 
            question: "Kombinerade huvud- och försignaler 5",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hfsignalkornastakor40.gif",
            options: ["Kör 60, avkortad tågväg", "Kör 80, vänta kör 40", "Kör 80, vänta stopp", "Kör 100"],
            answer: "Kör 80, vänta kör 40"
        },
        { 
            question: "Kombinerade huvud- och försignaler 6",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hfsignalkornastakor.gif",
            options: ["Kör 80, vänta kör 80", "Kör 40", "Kör 80, vänta stopp", "Kör 100"],
            answer: "Kör 80, vänta kör 80"
        },

        //Växlingsdvärgsignaler
        { 
            question: "Växlingsdvärgsignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/dvargstopp.gif",
            options: ["Rörelse tillåten, Stopp", "Rörelse tillåten, hinder finns(t ex fordon)", "Stopp", "Rörelse tillåten"],
            answer: "Stopp"
        },
        { 
            question: "Växlingsdvärgsignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/dvargkor.gif",
            options: ["Rörelse tillåten", "Stopp", "Kontrollera växlar", "Stopp, vänta kör"],
            answer: "Rörelse tillåten"
        },
        { 
            question: "Växlingsdvärgsignaler 3",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/dvarg4.gif",
            options: ["Rörelse tillåten", "Rörelse tillåten, kontrollera växlar", "Kör", "Rörelse tillåten, hinder finns (t ex fordon)"],
            answer: "Rörelse tillåten, hinder finns (t ex fordon)"
        },
        { 
            question: "Växlingsdvärgsignaler 4",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/dvarg3.gif",
            options: ["Rörelse tillåten, kontrollera växlar", "Rörelse tillåten", "Kör 40, vänta stopp", "Rörelse ej tillåten"],
            answer: "Rörelse tillåten, kontrollera växlar"
        },

        //Huvuddvärgsignaler
        { 
            question: "Huvuddvärgsignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargstopp.gif",
            options: ["Stopp" , "kör", "Kör 40", "Kör 80, vänta stopp"],    
            answer: "Stopp"
        },
        { 
            question: "Huvuddvärgsignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargstopp2.gif",
            options: ["För tåg: Stopp, För växling/arbetsfordon: Rörelse tillåten", "Kör 40", "Kör 80, vänta stopp", "För tåg: Stopp, För växling/arbetsfordon: Rörelse ej tillåten"],
            answer: "För tåg: Stopp, För växling/arbetsfordon: Rörelse tillåten"
            
        },
        { 
            question: "Huvuddvärgsignaler 3",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargstopp3.gif",
            options: ["Kör 80, vänta kör 80", "Stopp", "För tåg: Stopp, För växling/arbetsfordon: Rörelse tillåten, hinder finns", "Kör 40, varsamhet"],
            answer: "För tåg: Stopp, För växling/arbetsfordon: Rörelse tillåten, hinder finns"
        },
        { 
            question: "Huvuddvärgsignaler 4",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargstopp4.gif",
            options: ["Kör 80, vänta kör 80", "Kör 40", "För tåg: Stopp För växling/arbetsfordon: Rörelse tillåten, kontrollera växlar", "För tåg: Stopp, För växling/arbetsfordon: Rörelse tillåten"],
            answer: "För tåg: Stopp För växling/arbetsfordon: Rörelse tillåten, kontrollera växlar"
            
        },
        { 
            question: "Huvuddvärgsignaler 5",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargkor.gif",
            options: ["Kör 80, vänta kör 80", "Kör 40", "Kör", "Kör 100"],
            answer: "Kör"
        },
        { 
            question: "Huvuddvärgsignaler 6",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargkor40.gif",
            options: ["Kör, varsamhet - nästa signal kör 40 eller stopp", "Kör 40", "Kör 80, vänta stopp", "Kör 60"],
            answer: "Kör 40"
        },
        { 
            question: "Huvuddvärgsignaler 7",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargkornastastopp.gif",
            options: ["Kör 80, vänta kör 80", "Kör", "Kör, varsamhet - nästa signal kör 40 eller stopp", "Kör 40"],
            answer: "Kör, varsamhet - nästa signal kör 40 eller stopp"
        },
        { 
            question: "Huvuddvärgsignaler 8",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/hdvargkor40nastastopp.gif",
            options: ["Kör 40, varsamhet - nästa signal stopp", "Kör 40", "Kör 80, vänta stopp", "Kör 60"],
            answer: "Kör 40, varsamhet - nästa signal stopp"
        },

        //Spårspärrsignaler
        { 
            question: "Spårspärrsignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/sparsparrstopp.gif",
            options: ["Stopp", "Kör 40", "Rörelse tillåten", "Kör"],
            answer: "Stopp"
        },
        { 
            question: "Spårspärrsignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/sparsparrkor.gif",
            options: ["Rörelse tillåten", "Kör", "Kör 80, vänta stopp", "Stopp"],
            answer: "Rörelse tillåten"
        },
        //Stopplykta/Slutpunktsstopplykta
        { 
            question: "Stopplykta / Slutpunktsstopplykta",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/stopplykta.gif",
            options: ["Stopp", "Kör 40", "Kör 80, vänta stopp", "Kör 100"],
            answer: "Stopp"
        },
        //Vägskyddsförsignaler
        { 
            question: "Vägskyddsförsignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/vagforsignalstopp.gif",
            options: ["Nästa vägskyddssignal stopp", "Kör förhelvete", "Nästa vägskydssignal kör", "Passera ej plankorsning"],
            answer: "Nästa vägskyddssignal stopp"
        },
        { 
            question: "Vägskyddsförsignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/vagforsignalkor.gif",
            options: ["Passera plankorsning", "Nästa vägskyddssignal kör stopp", "Nästa vägskyddssignal kör", "Varning"],
            answer: "Nästa vägskyddssignal kör"
        },
        //Vägskyddssignaler
        { 
            question: "Vägskyddssignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/vagsignalstopp.gif",
            options: ["Stopp efter plankorsning", "Stopp före plankorsning", "Nästa vägskyddssignal kör", "Passera plankorsning"],
            answer: "Stopp före plankorsning"
        },
        { 
            question: "Vägskyddssignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/vagsignalkor.gif",
            options: ["Passera ej plankorsning", "Stopp efter plankorsning", "Passera plankorsning", "Stopp före plankorsning"],
            answer: "Passera plankorsning"
        },
        //A-Signaler
        { 
            question: "A-signaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/A-signalkor.gif",
            options: ["Stopp", "Kör", "Avfart", "Avgång"],
            answer: "Avgång"
        },
        { 
            question: "A-signaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/A-signalstopp.gif",
            options: ["Stopp", "Stopp, före hinder", "Avgång", "Kör"],
            answer: "Stopp"
        },
        //Brosignaler
        { 
            question: "Brosignaler 1",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/brosignalstopp.gif",
            options: ["Passera bro", "Kör 40 över bro", "Stopp före bro", "Stopp efter bro"],
            answer: "Stopp före bro"
        },
        { 
            question: "Brosignaler 2",
            img: "https://www.jarnvag.net/images/bild/banguide/signaler/brosignalkor.gif",
            options: ["Passera bro", "Passera inte bro", "Stopp efter bro", "Stopp före bro"],
            answer: "Passera bro"
        },

    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let incorrectAnswers = [];

    function showQuestion() {
    const question = questions[currentQuestionIndex];
    // Visa frågan
    document.getElementById('question').innerText = question.question;
    // Visa bilden för den aktuella frågan
    const imgElement = document.getElementById('signal-img');
    if (imgElement) {
        imgElement.src = question.img;
    } else {
        const newImgElement = document.createElement('img');
        newImgElement.id = 'signal-img';
        newImgElement.src = question.img;
        document.getElementById('quiz-container').insertBefore(newImgElement, document.getElementById('question'));
    }
    // Visa svarsalternativen
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerText = option;
        optionElement.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionElement);
    });
}

    function selectOption(option) {
        const question = questions[currentQuestionIndex];
        if (option === question.answer) {
            correctAnswers++;
        } else {
            incorrectAnswers.push(currentQuestionIndex);
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
    let resultsHtml = `<div>Du svarade rätt på ${correctAnswers} av ${questions.length} frågor.</div>`;
    if (incorrectAnswers.length > 0) {
        resultsHtml += "<div>Du hade fel på följande frågor:</div><ul>";
        incorrectAnswers.forEach(index => {
            resultsHtml += `<li>${questions[index].question}</li>`;
        });
        resultsHtml += "</ul>";
    }
    resultsHtml += '<button id="restart-quiz">Återställ svar och gå till startsida</button>';
    document.getElementById('quiz-container').innerHTML = resultsHtml;

    document.getElementById('restart-quiz').addEventListener('click', function() {
        
        window.location.reload(true);
    });

    }




    document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
});

showQuestion();



const learningSections = [

    //Hastighetstavlor
    {
        title: "Hastighetstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/hastighetstavla.gif",
        description: "Visar största tillåtna hastighet (sth) i kilometer per timme (km/h)."
    },
    {
        title: "Hastighetstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/hastighetstavlapilner.gif",
        description: "Används på sträckor med ATC där hastigheten är minst 160 km/h, pil nedåt betyder att sträcka med lägre hastighet börjar (exakt hastighet ges genom ATC-besked i förarhytten)"
    },
    {
        title: "Hastighetstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/hastighetstavlapilupp.gif",
        description: "Används på sträckor med ATC där hastigheten är minst 160 km/h, pil uppåt betyder att sträcka med högre hastighet börjar (exakt hastighet ges genom ATC-besked i förarhytten)."
    },
    {
        title: "Hastighetstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/hastighetstavlaATC.gif",
        description: "Hastighetstavla med tilläggstavla för ATC-överskridande (innebär att vissa tåg får köras med högre hastighet, vilken framgår av ATC-besked)."

    },

    //Orienteringstavlor
    {
        title: "Orienteringstavlor",
        description: "Förvarnar om kommande tavlor, stationer, signaler, vägskydd m m. Består av en triangelformad tavla med en eller flera tilläggstavlor. Kommer några exempel i nästa del."
    },
    {
        title: "Orienteringstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/orienteringhsignal.gif",
        description: "Orienterar om att huvudsignal kommer, används om fristående försignal till huvudsignalen saknas (därav den runda skylten som liknar en försignal)."
    },
    {
        title: "Orienteringstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/orienteringtplats.gif",
        description: "Orienterar om kommande trafikplats, bokstavskombinationen är trafikplatsens signatur."
    },
    {
        title: "Orienteringstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/orienteringhastighet.gif",
        description: "Orienterar om att följande hastighetstavla kommer att visa lägre hastighet (anges i siffror). Vanligen placerad en kilometer före hastighetstavlan."
    },
    {
        title: "Orienteringstavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/orienteringvagskydd.gif",
        description: "Orienterar om vägskyddsanläggning, betyder att lokföraren ska kontrollera att vägskyddsförsignal eller vägskyddssignal visar rörelse tillåten."
    },

    //Märktavlor
    {
        title: "Märktavlor",
        description: "Finns på signaler och används även tillsammans med signalpunktstavlor och orienteringstavlor. Visar trafikplatsens signatur och eventuellt signalens beteckning."
    },
    {
        title: "Märktavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/marktavlafyrkantig.gif",
        description: "Fyrkantig märktavla finns på infartssignaler, mellansignaler och utfartssignaler."
    },
    {
        title: "Märktavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/marktavlarund.gif",
        description: "Rund märktavla finns på utfartsblocksignaler och mellanblocksignaler."
    },

    //Ljudsignaltavlor 
    {
        title: "Ljudsignaltavlor",
        description: "Finns före vägkorsningar utan vägskyddsanläggning och tillfälligt vid arbetsplatser i/vid spåret."
    },
    {
        title: "Ljudsignaltavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/ljudsignaltavla.gif",
        description: "Anger att lokföraren ska ge ljudsignalen 'tåg kommer' (en ca tre sekunder lång signal)."
    },
    {
        title: "Ljudsignaltavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/ljudsignaltavladag.gif",
        description: "Ljudsignaltavla med tilläggstavla 'dagtid', anger att 'tåg kommer' endast ska ges mellan kl 6.00 och 22.00."
    },
    {
        title: "Ljudsignaltavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/ljudsignaltavlaV.gif",
        description: "Ljudsignaltavla med tilläggstavla 'vägskydd', anger att 'tåg kommer' ska ges inte bara vid tavlan utan även vid en punkt mellan tavlan och vägkorsningen"
    },
    {
        title: "Ljudsignaltavlor",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/ljudsignaltavlaA.gif",
        description: "Ljudsignaltavla med tilläggstavla 'arbetsplats, anger att 'tåg kommer', ska ges uppreade gånger tills arbetsplatsen passerats.'"
    },

    //Signalpunktstavla
    {
        title: "Signalpunktstavla",
        descriptions: [
            "Markerar signal i trafikeringssystemet ERTMS som saknar optiska huvudsignaler.  Markerar en infartssignalpunkt eller mellansignalpunkt (används i kombination med kvadratisk märktavla med trafikplatsens förkortning), alternativt utfartssignalpunkt eller linjesignalpunkt (rund märktavla).",
            "Betydelse: För tågfärd och spärrfärd 'stopp' om inte färden har fått ett körtillstånd som gäller förbi tavlan. För växling: 'stopp' om inte växlingen i samband med starttillstånd har fått tillstånd att passera tavlan.",
        ],
        imgs: [
            "https://www.jarnvag.net/images/bild/banguide/skyltar/signalpunktstavla.gif",
            "https://www.jarnvag.net/images/bild/banguide/skyltar/signalpunktstavla2.gif",
            "https://www.jarnvag.net/images/bild/banguide/skyltar/signalpunktstavla3.gif"
        ] 
    },

    //Uppehållstavlor
    {
        title: "Uppehållstavlor (Kallas även U-tavlor)",
        description: "U-tavlor gäller tåg som har uppehåll för resande. På tavlan finns antingen ett U (gäller då oberoende tåglängd) eller ett tal som anger var ett tåg av en viss längd ska stanna. I det senare fallet finns då vanligtvis flera tavlor med olika längder."

    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/u-tavla.gif",
        description: "Visar stopplats för persontåg, finns på stationer."
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/u-tavlavit.gif",
        description: "U-tavla med siffror, visar var ett persontåg med en viss längd ska stanna. Siffrorna anger tåglängd i meter."
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/u-tavlabla.gif",
        description: "Som vit U-tavla med siffror men anger också p g a ATC-balisers placering bör tåg stanna tidigast strax före nästa U-tavla."
    },

    //Stoppplatstavla
    {
        title: "Stopplatstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/stopplatstavla.gif",
        description: "En stopplatstavla gäller för tåg som ska stanna på en trafikplats men inte har uppehåll som är avsett för resandes av- och påstigning. Visar var ett tåg med en viss längd ska stanna."
    },

    //Påstigningstavla
    {
        title: "Påstigningstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/pastigningstavla.gif",
        description: "Anger att persontåg ska stanna för resande, kan finnas på mindre hållplatser. Tavlan sitter på en stolpe och resenären riktar själv tavlan mot det håll tåget kommer ifrån. Kallas även 'plåtstins'."
    },

    //ATC-relaterade tavlor
    {
        title: "ATC-relaterade tavlor",
        description: "Tavlor med information relaterad till säkerhetssystemet ATC(Automatic Train Control)."
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/forvarningstavla.gif",
        descriptions: [
            "Betydelse fristående: Förvarningstavla, förvarnar om kommande hastighetstavla som visar lägre hastighet, hastigheten ges genom ATC-besked i förarhytten.",
            "Betydelse tillsammans med signal: Tilläggstavla ATC-restriktion, varnar för att restriktivt ATC-besked kan komma, t ex hastighetsbegränsning"
        ]

    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/forsignalbaliser.gif",
        description: "Försignalbaliser, utmärker fiktiv försignal. En fiktiv försignal har samma funktion som en riktig försignal men en optisksignal saknas och signalbeskedet ges genom ATC-besked i förarhytten istället."
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/repeterbaliser.gif",
        description: "Repeterbaliser: Repeterbaliser upprepar ett tidigare ATC-besked. Kan även vara blå"
    },

    //ATC-område

    {
        title: "ATC-område",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/atcborjar.gif",
        description: "ATC börjar. Visar att område med ATC börjar."
    },
    {
        title: "ATC-område",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/atcslutar.gif",
        description: "ATC slutar. Visar att område med ATC slutar."
    },

    //Systemgränstavlor
    {
        title: "Systemgränstavlor",
        description: "Visar gränsen till ett annat trafikeringssystem."
    },
    {
        title: "Systemgränstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/systemgranstavla_h.gif",
        description: "System H börjar."
    },
    {
        title: "Systemgränstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/systemgranstavla_r.gif",
        description: "System R börjar."
    },
    {
        title: "Systemgränstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/systemgranstavla_e2.gif",
        description: "System E2 börjar."
    },
    {
        title: "Systemgränstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/systemgranstavla_e3.gif",
        description: "System E3 börjar."
    },
    {
        title: "Systemgränstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/systemgranstavla_m.gif",
        description: "System M börjar."
    },
    {
        title: "Systemgränstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/systemgranstavla_s.gif",
        description: "System S börjar."
    },

    //Random tavlor
    {
        title: "Tavla 'Fortsatt körtillstånd' ",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/fortsattkortillstand.gif",
        description: "Tavlan 'fortsatt körtillstånd kan finnas på en driftplats och den är då uppsatt vid en normal stopplats för tåg. Om den närmast föregående huvudsignalen i samma riktning visade 'kör' för tåget, gäller 'kör' i den huvudsignalen som ett fortsatt körtillstånd för tåget. Tåget får då sättas igång utan att föraren har inhämtat ett nytt körtillstånd ",

    },
    {
        title: "Medgivandetavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/medgivandetavla.gif",
        description: "Kan finnas på huvudsignal. 'Stopp' i signalen upphävs för växling. Den signalbild 'lodrätt' eller 'snett vänster' som visades i närmast föregående dvärgsignal gäller förbi huvudljussignalen. Huvudljussignalen utgör inte någon slutpunkt för en dvärgsignalsträcka. Tavlan har ingen signalbetydelse för tågfärd eller spärrfärd."

    },
    {
        title: "Tavla 'Gräns för växling' ",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/gransvaxling2.gif",
        description: "Nyare (vänster) och äldre (höger) version. Tavla 'gräns för växling' kan finnas för att visa växlingsgränsen, alltså den gräns utanför vilken växling inte får äga rum utan att tågklareraren har lämnat ett särskilt medgivande. Äldre tavlar är rektangulära och har text. "

    },
    {
        title: "Huvudsignaltavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/huvudsignaltavla.gif",
        description: "Betyder stopp, används när infartssignal eller mellansignal tillfälligt saknas."
    },
    {
        title: "Slutpunktstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/s-tavla.gif",
        description: "Kallas även S-tavla. Anger en tågvägs slutpunkt (tågväg = trafikteknisk term för de spår ett tåg ska använda under sin färd)."
    },
    {
        title: "Dvärgsignalsluttavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/dvargsignalsluttavla.gif",
        description: "Anger slutpunkten för en signalsträcka från en dvärgsignal, används om inte signalsträckan slutar vid en annan signal, stoppbock eller liknande."
    },
    {
        title: "Målpunktstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/malpunktstavla.gif",
        description: "Målpunktstavlan gäller enbart vid körning med ATC-besked. En målpunktstavla finns bara i de fall som målpunkten inte ligger strax före den första huvudspårsskiljande motväxeln."

    },
    {
        title: "Ogiltighetstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/ogiltighetstavla.gif",
        description: "Sätts på signal (som i detta exempel) eller tavla som ej är i bruk."
    },

    //Nedkopplings-, urkopplings- och inkopplingstavlor
    {
        title: "Nedkopplings-, urkopplings- och inkopplingstavlor",
        description: "Används vid skyddssektioner i kontaktledningen (skyddssektion = sektion av kontaktledning som kan kopplas ur)."
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/nedkopplingstavla.gif",
        description: "Nedkopplingstavla utan signallampa, anger att drivmotorströmmen ska vara frånslagen på fordon med uppfälld strömavtagare innan tavlan passeras."
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/nedkopplingstavlalampa.gif",
        descriptions: [
            "Nedkopplingstavla med signallampa.",
            "Släckt lampa: motorströmmen ska vara frånslagen på fordon med uppfälld strömavtagare innan tavlan passeras.",
            "Tänd lampa: Drivmotorströmmen kan vara inkopplad."
        ] 
        
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/urkopplingstavla.gif",
        description: "Urkopplingstavla, anger att huvudbrytaren ska vara frånslagen på fordon med uppfälld strömavtagare innan tavlan passeras."
    },
    {
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/inkopplingstavla.gif",
        description: "Inkopplingstavla, anger att huvudbrytaren åter kan slås till när fordon med uppfälld strömavtagare har passerat tavlan."
    },

    {
        title: "Strömbegränsningstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/strombegransningstavla.gif",
        description: "Strömbegränsningstavla, passera tavlan utan strömpådrag eller med så lågt pådrag som omständigheterna medger. Med pådrag jämställs återmatande elbroms. Tavlan får dock passeras med blandbroms om elbromseffekten är måttlig."
    },
    {
        title: "Stoppförbudstavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/stoppforbudstavla.gif",
        description: "Betyder att fordon inte får stannas så att strömavtagare hamnar mellan två stoppförbudstavlor, finns t ex vid skyddsektioner i kontaktledningen."
    },

    //Elspärrsignaler
    {
        title: "Elspärrsignaler",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/elsparrtavlarod.gif",
        description: "Röd elspärrsignal finns där kontaktledningen tar slut. Betyder stopp för fordon med uppfälld strömavtagare, används exempelvis på lastspår som inte är elektrifierade."
    },
    {
        title: "Elspärrsignaler",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/elsparrtavlagul.gif",
        description: "Gul elspärrsignal markerar spår där kontaktledningen vanligtvis inte är spänningsatt. Betyder stopp för fordon med uppfälld strömavtagare om inte besked lämnats att kontaktledningen är spänningssatt."
    },

    //Blandade tavlor
    {
        title: "Kilometertavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/kmtavla.gif",
        description: "Anger avståndet från en viss punkt, oftast banans utgångsstation."
    },
    {
        title: "Lutningsvisare",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/lutningsvisare.gif",
        description: "Visar kommande lutning/stigning i promille och antal meter. Kan även vara blå med vit text. Om den vänstra vingen pekar snett uppåt anger det en stigning. Om den pekar snett nedåt anger tavlan en lutning nedåt. Om den vänstra vingen är horisontell anger den en sträcka som är plan eller som enbart har smärre stigningar eller lutningar."

    },
    {
        title: "Ploglyfttavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/vagtavla.gif",
        description: "Betyder att förare på plogfordon ska ta upp plogen p g a hinder. Finns vid t ex vägkorsningar. Nyare ploglyfttavlor är fyrkantiga."
    },
    {
        title: "Hindertavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/hindertavla.gif",
        description: "Betyder stopp, placeras på spår som av någon anledning inte kan trafikeras."
    },
    {
        title: "Vågsignaltavla",
        img: "https://www.jarnvag.net/images/bild/banguide/skyltar/vagsignaltavla.gif",
        description: "Betyder sakta, finns vid vagnvågar."
    }



];


let currentIndex = 0;

function showSign() {
    if(currentIndex < 0) {
        currentIndex = 0;
    }   
    else if (currentIndex >= learningSections.length){
        currentIndex = learningSections.length -1;
    }

    const section = learningSections[currentIndex];
    document.getElementById('learning-title').innerText = section.title || '';

    const description = Array.isArray(section.descriptions) ? section.descriptions.join("\n") : section.description;
    document.getElementById('learning-description').innerText = description;

    const imagesContainer = document.getElementById('images-container');
    imagesContainer.innerHTML = '';

    //hantera en eller flera bilder
    const imgs = Array.isArray(section.imgs) ? section.imgs : [section.img];
    imgs.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = section.title;
        img.style.marginTop = '10px';
        imagesContainer.appendChild(img);
    });
}
showSign();

document.getElementById('next-sign-button').addEventListener('click', function() {
    if(currentIndex < learningSections.length -1) {
        currentIndex++;
        showSign();
    }
    else{
        showEndOfSignsMessage();
    }
    
});

document.getElementById('back-sign-button').addEventListener('click', function() {
    currentIndex--;
    showSign();
});

function showEndOfSignsMessage() {
    // Dölj skylt/tavlor-quiz containern
    document.getElementById('signs-quiz-container').style.display = 'none';

    // Visa end-of-signs meddelandet
    document.getElementById('end-of-signs-container').style.display = 'block';
}

document.getElementById('back-to-start').addEventListener('click', function() {

    // Antingen återladda sidan för att återställa allt till initialt tillstånd
    window.location.reload(true);
    
});



});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-signal-quiz').addEventListener('click', function() {
        document.getElementById('quiz-container').style.display = 'block'; // Visa signalquiz-containern
        document.getElementById('signs-quiz-container').style.display = 'none'; // Dölj skyltquiz-containern
    });

    document.getElementById('start-signs-quiz').addEventListener('click', function() {
        document.getElementById('signs-quiz-container').style.display = 'block'; // Visa skyltquiz-containern
        document.getElementById('quiz-container').style.display = 'none'; // Dölj signalquiz-containern
    });
});


