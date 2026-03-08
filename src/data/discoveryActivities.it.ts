import type { AgeBucket, Activity } from "./discoveryActivities";

export const activitiesByAgeIt: Record<AgeBucket, Activity[]> = {
  "under-15": [
    {
      id: "homework",
      label: "Studio e compiti",
      examplePrompt: "Voglio: ricevere aiuto con i miei compiti di scienze sul sistema solare.\nCome risultato mi aspetto di ricevere: spiegazioni chiare sulle caratteristiche dei pianeti e curiosità che rendano lo studio divertente.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "u15-tutoring",
          title: "Aiuto compiti e tutoraggio personalizzato",
          description: "I chatbot AI possono agire come un tutor personale disponibile 24/7, aiutando gli studenti a capire concetti difficili, risolvere problemi di matematica passo dopo passo e preparare riassunti di studio.",
          examplePrompt: "Voglio: capire come funziona la fotosintesi in termini semplici per i miei compiti di scienze.\nCome risultato mi aspetto di ricevere: una spiegazione chiara adatta a uno studente delle medie, magari con un semplice schema o un'analogia.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
        {
          id: "u15-brainstorm",
          title: "Brainstorming per progetti creativi",
          description: "Assistenza per generare idee per progetti scolastici, temi, presentazioni e ricerche. Il chatbot può suggerire diversi approcci a un argomento.",
          examplePrompt: "Voglio: creare una presentazione coinvolgente sulla storia romana per la mia classe.\nCome risultato mi aspetto di ricevere: 5 idee creative e originali per la presentazione che impressionino il mio insegnante e i compagni.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "entertainment",
      label: "Divertimento e giochi",
      examplePrompt: "Voglio: creare una storia d'avventura divertente dove sono il protagonista che esplora una foresta magica.\nCome risultato mi aspetto di ricevere: una storia interattiva dove posso fare delle scelte e vedere diversi risultati.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "u15-languages",
          title: "Pratica di lingue straniere",
          description: "Conversazioni interattive per praticare inglese, spagnolo o altre lingue, con correzioni immediate e spiegazioni grammaticali.",
          examplePrompt: "Voglio: praticare la mia conversazione in inglese parlando delle mie vacanze estive.\nCome risultato mi aspetto di ricevere: pratica di dialogo interattivo con correzioni sulla mia grammatica e sul vocabolario.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "new-skills",
      label: "Imparare nuove abilità",
      examplePrompt: "Voglio: imparare a disegnare personaggi dei cartoni passo dopo passo.\nCome risultato mi aspetto di ricevere: istruzioni semplici e consigli che un principiante può seguire facilmente.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "u15-brainstorm2",
          title: "Brainstorming per progetti creativi",
          description: "Il chatbot può suggerire diversi approcci, proporre strutture di scrittura e fornire punti di partenza per la ricerca.",
          examplePrompt: "Voglio: creare una presentazione coinvolgente sulla storia romana per la mia classe.\nCome risultato mi aspetto di ricevere: 5 idee creative e originali per la presentazione che impressionino il mio insegnante e i compagni.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "socializing",
      label: "Socializzare con i coetanei",
      examplePrompt: "Voglio: capire come iniziare una conversazione con i nuovi compagni di classe.\nCome risultato mi aspetto di ricevere: spunti per iniziare una conversazione e consigli per sentirmi più sicuro.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "u15-emotional",
          title: "Supporto emotivo e conversazione sicura",
          description: "Uno spazio sicuro per parlare di emozioni, ansie scolastiche, pressioni sociali o difficoltà nelle relazioni con i coetanei. I chatbot possono offrire ascolto senza giudizio e suggerimenti per la gestione dello stress.",
          examplePrompt: "Voglio: parlare di come mi sento escluso quando i miei amici escono senza di me.\nCome risultato mi aspetto di ricevere: consigli su come gestire questi sentimenti e magari modi per comunicare con i miei amici a riguardo.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
  ],

  "15-25": [
    {
      id: "uni-study",
      label: "Studio universitario e formazione professionale",
      examplePrompt: "Voglio: preparare una lettera di presentazione convincente per la mia candidatura a uno stage in graphic design.\nCome risultato mi aspetto di ricevere: una bozza professionale che metta in evidenza le mie competenze e il mio entusiasmo per la posizione.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "1525-academic",
          title: "Assistenza nella scrittura accademica",
          description: "Supporto completo per saggi universitari, tesi e relazioni di ricerca. Il chatbot può aiutare con la struttura del documento, il brainstorming degli argomenti, la parafrasi di concetti complessi e la revisione grammaticale.",
          examplePrompt: "Voglio: preparare una lettera di presentazione convincente per la mia candidatura a uno stage in graphic design.\nCome risultato mi aspetto di ricevere: una bozza professionale che metta in evidenza le mie competenze e il mio entusiasmo per la posizione.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "first-job",
      label: "Trovare il primo lavoro o stage",
      examplePrompt: "Voglio: ottimizzare il mio profilo LinkedIn per attirare i recruiter nel settore tecnologico.\nCome risultato mi aspetto di ricevere: suggerimenti specifici per il mio titolo, riepilogo e sezione esperienze con parole chiave del settore.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "1525-interview",
          title: "Preparazione ai colloqui di lavoro",
          description: "Simulazione di colloqui, creazione di risposte efficaci alle domande più comuni, revisione di CV e lettere di presentazione. Il chatbot può fornire feedback costruttivo e suggerire miglioramenti.",
          examplePrompt: "Voglio: esercitarmi per il mio primo colloquio di lavoro come sviluppatore junior.\nCome risultato mi aspetto di ricevere: domande realistiche da colloquio con feedback sulle mie risposte e suggerimenti per migliorare.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "career-skills",
      label: "Sviluppo di competenze professionali",
      examplePrompt: "Voglio: creare un piano di apprendimento di 3 mesi per diventare competente nella programmazione Python.\nCome risultato mi aspetto di ricevere: un percorso strutturato con risorse, tappe intermedie e progetti pratici.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "1525-career",
          title: "Pianificazione della carriera e sviluppo competenze",
          description: "Orientamento professionale, identificazione delle competenze da sviluppare, suggerimenti per corsi e certificazioni rilevanti. Il 61% dei giovani della Gen Z ritiene che le competenze nell'IA siano essenziali per il progresso professionale.",
          examplePrompt: "Voglio: pianificare il mio percorso di carriera nell'intelligenza artificiale e capire quali competenze mi servono.\nCome risultato mi aspetto di ricevere: una roadmap di competenze tecniche e trasversali da sviluppare, più raccomandazioni per corsi o certificazioni.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "relationships",
      label: "Gestione delle relazioni personali",
      examplePrompt: "Voglio: affrontare una conversazione difficile con il mio coinquilino riguardo alle spese condivise.\nCome risultato mi aspetto di ricevere: strategie di comunicazione e frasi che aiutino a risolvere la questione senza danneggiare la nostra amicizia.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "1525-mental",
          title: "Supporto per la salute mentale e gestione dello stress",
          description: "Il 32% dei giovani adulti si rivolge all'IA per supporto nella vita personale, inclusi consigli sulle relazioni e gestione dell'ansia. I chatbot possono offrire tecniche di mindfulness e esercizi di respirazione.",
          examplePrompt: "Voglio: gestire la mia ansia e lo stress durante il periodo degli esami perché mi sento sopraffatto.\nCome risultato mi aspetto di ricevere: tecniche pratiche per la gestione dello stress e un piano di studio che sia gestibile.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "digital-content",
      label: "Creazione di contenuti digitali",
      examplePrompt: "Voglio: fare brainstorming di didascalie coinvolgenti per Instagram per il mio portfolio fotografico.\nCome risultato mi aspetto di ricevere: 10 idee creative per didascalie che valorizzino la mia visione artistica e coinvolgano il mio pubblico.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "1525-content",
          title: "Creazione di contenuti per i social media",
          description: "Brainstorming di didascalie, calendari editoriali, script per video e strategie di coinvolgimento del pubblico per le piattaforme social.",
          examplePrompt: "Voglio: fare brainstorming di didascalie coinvolgenti per Instagram per il mio portfolio fotografico.\nCome risultato mi aspetto di ricevere: 10 idee creative per didascalie che valorizzino la mia visione artistica e coinvolgano il mio pubblico.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
  ],

  "25-40": [
    {
      id: "career-mgmt",
      label: "Gestione della carriera",
      examplePrompt: "Voglio: negoziare un aumento di stipendio durante la mia valutazione delle prestazioni il mese prossimo.\nCome risultato mi aspetto di ricevere: una strategia con dati di mercato, punti di discussione e risposte alle obiezioni più comuni.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "2540-automation",
          title: "Automazione delle attività lavorative ripetitive",
          description: "I Millennial sono gli utenti più costanti dell'IA per la produttività lavorativa. Il 56% usa l'IA generativa al lavoro quotidianamente. I chatbot possono automatizzare email professionali, bozze di report, presentazioni e riassunti di documenti lunghi.",
          examplePrompt: "Voglio: rifiutare una proposta commerciale in modo professionale senza bruciare i ponti.\nCome risultato mi aspetto di ricevere: un'email ben scritta che sia cortese, chiara e mantenga un rapporto commerciale positivo.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "work-life",
      label: "Equilibrio vita-lavoro",
      examplePrompt: "Voglio: creare un sistema di gestione del tempo che mi permetta di lavorare in modo efficiente avendo anche tempo di qualità con la mia famiglia.\nCome risultato mi aspetto di ricevere: tecniche pratiche, modelli di pianificazione e strategie per stabilire dei confini.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "2540-skills",
          title: "Sviluppo di competenze professionali",
          description: "Il 62% dei lavoratori Millennial (35-44) dichiara un'elevata competenza nell'IA. I chatbot supportano l'apprendimento continuo spiegando nuove tecnologie e suggerendo percorsi di aggiornamento.",
          examplePrompt: "Voglio: imparare le basi del machine learning per applicarle nel mio ruolo di marketing.\nCome risultato mi aspetto di ricevere: spiegazioni pratiche dei concetti di ML con esempi specifici di applicazioni nel marketing.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "parenting",
      label: "Genitorialità e gestione familiare",
      examplePrompt: "Voglio: creare un piano settimanale dei pasti per la mia famiglia che sia sano, economico e gradito ai bambini.\nCome risultato mi aspetto di ricevere: un menu dettagliato con ricette e una lista della spesa organizzata per reparti del supermercato.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "2540-parenting",
          title: "Supporto alla genitorialità",
          description: "I genitori Millennial usano i chatbot per creare storie della buonanotte personalizzate, piani settimanali dei pasti, generare idee per i progetti scolastici dei figli e ottenere consigli sulle sfide educative più comuni.",
          examplePrompt: "Voglio: creare una storia della buonanotte coinvolgente per il mio bambino di 5 anni sull'amicizia.\nCome risultato mi aspetto di ricevere: una storia originale con un personaggio drago che insegni il valore dell'amicizia in modo adatto all'età.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "financial",
      label: "Pianificazione finanziaria e investimenti",
      examplePrompt: "Voglio: iniziare a investire per l'istruzione universitaria dei miei figli con un orizzonte di 15 anni.\nCome risultato mi aspetto di ricevere: una panoramica degli strumenti di investimento, considerazioni sul rischio e una strategia di allocazione di esempio.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "2540-finance",
          title: "Gestione finanziaria e decisioni di investimento",
          description: "Analisi delle opzioni finanziarie, spiegazione dei concetti di investimento, creazione di budget familiari e confronto di prodotti finanziari. I chatbot possono semplificare informazioni complesse.",
          examplePrompt: "Voglio: capire la differenza tra ETF e fondi comuni di investimento per prendere decisioni informate.\nCome risultato mi aspetto di ricevere: un confronto chiaro con pro e contro di ciascuna opzione, spiegato in termini semplici.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "prof-dev",
      label: "Sviluppo professionale continuo",
      examplePrompt: "Voglio: identificare le tendenze emergenti nel mio settore (marketing digitale) per restare competitivo.\nCome risultato mi aspetto di ricevere: un riepilogo delle tendenze chiave, competenze raccomandate da sviluppare e risorse per l'apprendimento.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "2540-automation2",
          title: "Automazione delle attività lavorative ripetitive",
          description: "I chatbot possono automatizzare la stesura di email, la creazione di report, la generazione di presentazioni e il riepilogo di documenti per risparmiare tempo.",
          examplePrompt: "Voglio: rifiutare una proposta commerciale in modo professionale senza bruciare i ponti.\nCome risultato mi aspetto di ricevere: un'email ben scritta che sia cortese, chiara e mantenga un rapporto commerciale positivo.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
  ],

  "40-60": [
    {
      id: "leadership",
      label: "Ruoli di leadership e gestione",
      examplePrompt: "Voglio: sviluppare domande per un colloquio per assumere un senior marketing manager nel mio team.\nCome risultato mi aspetto di ricevere: domande comportamentali e situazionali che valutino le competenze di leadership e l'adattamento culturale.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "4060-projects",
          title: "Assistenza nella gestione di progetti e team",
          description: "L'82% dei professionisti della Gen X concorda sul fatto che l'IA li aiuterà a risolvere problemi e superare ostacoli lavorativi. I chatbot possono creare modelli di report, generare domande per colloqui, strutturare feedback per i dipendenti e pianificare riunioni efficaci.",
          examplePrompt: "Voglio: strutturare una riunione trimestrale di feedback efficace con il mio team di 8 persone.\nCome risultato mi aspetto di ricevere: un ordine del giorno con tempistiche, argomenti da trattare e tecniche per garantire un dialogo costruttivo.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "team-mgmt",
      label: "Gestione di team e processi",
      examplePrompt: "Voglio: implementare una nuova metodologia di project management per il mio dipartimento di 15 persone.\nCome risultato mi aspetto di ricevere: un piano di gestione del cambiamento con modelli di comunicazione, linee guida per la formazione e metriche di successo.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "4060-tech",
          title: "Apprendimento di nuove tecnologie",
          description: "Il 76% dei professionisti della Gen X ritiene che l'adozione dell'IA ridurrà il carico di lavoro e migliorerà l'equilibrio vita-lavoro. I chatbot possono spiegare nuovi software aziendali, fornire tutorial personalizzati e assistere nell'adozione di strumenti digitali.",
          examplePrompt: "Voglio: imparare a usare Slack in modo efficace perché la mia azienda l'ha appena adottato.\nCome risultato mi aspetto di ricevere: una guida per principianti con le migliori pratiche per la comunicazione e l'organizzazione.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "retirement-plan",
      label: "Pianificazione della pensione",
      examplePrompt: "Voglio: valutare se sono sulla buona strada per andare in pensione serenamente a 62 anni con il mio attuale tasso di risparmio.\nCome risultato mi aspetto di ricevere: una valutazione della preparazione alla pensione con analisi delle lacune e raccomandazioni concrete.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "4060-retirement",
          title: "Pianificazione finanziaria per la pensione",
          description: "Analisi di scenari pensionistici, calcolo dei risparmi necessari, spiegazione delle opzioni di investimento a lungo termine e confronto dei piani pensionistici.",
          examplePrompt: "Voglio: pianificare i miei risparmi per la pensione per mantenere uno stile di vita confortevole quando andrò in pensione a 65 anni.\nCome risultato mi aspetto di ricevere: calcoli del risparmio mensile necessario e confronto delle opzioni di piani pensionistici.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "elderly-care",
      label: "Assistenza ai genitori anziani",
      examplePrompt: "Voglio: capire le diverse opzioni di assistenza disponibili per mio padre che necessita di aiuto quotidiano.\nCome risultato mi aspetto di ricevere: un confronto tra assistenza domiciliare, residenze assistite e case di riposo con considerazioni sui costi e fattori di qualità.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "4060-health",
          title: "Informazioni sanitarie e assistenza familiare",
          description: "Supporto nella comprensione di documenti medici, ricerca di condizioni di salute, gestione degli appuntamenti per parenti anziani e comprensione delle opzioni assicurative sanitarie.",
          examplePrompt: "Voglio: capire la diagnosi medica di mia madre in termini semplici per aiutarla a prendere decisioni informate.\nCome risultato mi aspetto di ricevere: una spiegazione in linguaggio semplice e un elenco di domande importanti da fare al suo medico.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "tech-update",
      label: "Aggiornamento tecnologico professionale",
      examplePrompt: "Voglio: capire come gli strumenti di IA possono semplificare il flusso di lavoro del mio team e aumentare la produttività.\nCome risultato mi aspetto di ricevere: applicazioni pratiche dell'IA per il mio settore con esempi di implementazione e considerazioni sul ROI.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "4060-tech2",
          title: "Apprendimento di nuove tecnologie",
          description: "I chatbot possono spiegare nuovi software aziendali, fornire tutorial personalizzati e assistere nell'adozione di strumenti digitali.",
          examplePrompt: "Voglio: imparare a usare Slack in modo efficace perché la mia azienda l'ha appena adottato.\nCome risultato mi aspetto di ricevere: una guida per principianti con le migliori pratiche per la comunicazione e l'organizzazione.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
  ],

  "60+": [
    {
      id: "health",
      label: "Gestione della salute e del benessere",
      examplePrompt: "Voglio: creare una semplice routine di esercizi sicura per chi soffre di artrite e che si possa fare a casa.\nCome risultato mi aspetto di ricevere: esercizi delicati con descrizioni chiare e consigli di sicurezza per la mia condizione.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "60-meds",
          title: "Promemoria farmaci e gestione della salute",
          description: "I chatbot vocali possono inviare promemoria per i farmaci, confermare l'assunzione e avvisare i caregiver se le dosi vengono saltate. Possono anche monitorare i sintomi e supportare la gestione delle condizioni croniche.",
          examplePrompt: "Voglio: impostare promemoria giornalieri per prendere il mio farmaco per la pressione alle 9 di mattina.\nCome risultato mi aspetto di ricevere: un sistema di promemoria affidabile con monitoraggio della conferma per assicurarmi di non saltare le dosi.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "independence",
      label: "Mantenere l'indipendenza quotidiana",
      examplePrompt: "Voglio: organizzare i miei farmaci e creare un sistema per ricordare quando prenderli.\nCome risultato mi aspetto di ricevere: strategie pratiche di organizzazione e metodi di promemoria che funzionino senza tecnologia complicata.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "60-appointments",
          title: "Supporto per appuntamenti e navigazione sanitaria",
          description: "Assistenza nella comprensione della copertura assicurativa, prenotazione e promemoria delle visite mediche e spiegazione dei benefici sanitari disponibili. L'82% degli anziani non ha effettuato visite di controllo annuali e i chatbot possono aiutare a identificare i benefici finanziari.",
          examplePrompt: "Voglio: tenere traccia dei miei appuntamenti medici e capire cosa copre la mia assicurazione sanitaria.\nCome risultato mi aspetto di ricevere: promemoria degli appuntamenti e spiegazioni chiare dei miei benefici assicurativi.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "socializing-senior",
      label: "Socializzare e prevenire l'isolamento",
      examplePrompt: "Voglio: trovare attività locali e gruppi sociali per anziani nella mia zona che condividano il mio interesse per il giardinaggio.\nCome risultato mi aspetto di ricevere: suggerimenti per risorse della comunità, circoli e opportunità di volontariato.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "60-companion",
          title: "Compagnia e conversazione",
          description: "Gli anziani soli usano sempre più spesso i chatbot per la compagnia quotidiana. I chatbot possono condividere storie, fare domande di cultura generale, giocare a giochi di memoria e offrire conversazioni significative.",
          examplePrompt: "Voglio: avere una conversazione significativa sui miei ricordi degli anni '60.\nCome risultato mi aspetto di ricevere: domande coinvolgenti che mi aiutino a condividere storie e ricordare quell'epoca.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "pension",
      label: "Gestione della pensione e delle finanze",
      examplePrompt: "Voglio: capire i miei benefici pensionistici e ottimizzare il mio budget mensile con un reddito fisso.\nCome risultato mi aspetto di ricevere: una chiara panoramica delle mie fonti di reddito e consigli pratici per il budget dei pensionati.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "60-tech",
          title: "Assistenza tecnologica quotidiana",
          description: "Supporto passo dopo passo per l'uso di smartphone, servizi online, videochiamate con la famiglia e risoluzione di problemi tecnici comuni. Il 71% degli anziani non ha mai usato strumenti come ChatGPT, ma con un'assistenza semplice possono beneficiare della tecnologia.",
          examplePrompt: "Voglio: inviare una foto a mia nipote usando WhatsApp ma non sono sicuro di come fare.\nCome risultato mi aspetto di ricevere: istruzioni passo dopo passo con un linguaggio semplice che mi guidino nel processo.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
    {
      id: "learn-tech",
      label: "Imparare le nuove tecnologie",
      examplePrompt: "Voglio: imparare a fare una videochiamata con la mia famiglia usando lo smartphone.\nCome risultato mi aspetto di ricevere: istruzioni semplici, passo dopo passo, con un linguaggio chiaro che posso seguire facilmente.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
      useCases: [
        {
          id: "60-tech2",
          title: "Assistenza tecnologica quotidiana",
          description: "Supporto passo dopo passo per l'uso di smartphone, servizi online, videochiamate con la famiglia e risoluzione di problemi tecnici comuni.",
          examplePrompt: "Voglio: inviare una foto a mia nipote usando WhatsApp ma non sono sicuro di come fare.\nCome risultato mi aspetto di ricevere: istruzioni passo dopo passo con un linguaggio semplice che mi guidino nel processo.\nPuoi aiutarmi? Se sì, come? Hai bisogno di ulteriori informazioni?",
        },
      ],
    },
  ],
};
