import type { Lesson } from "./lessons";

export const lessonsIt: Lesson[] = [
  {
    id: 1,
    title: "Più contesto è meglio",
    concept: "Il contesto conta",
    description: "I chatbot AI funzionano meglio quando fornisci contesto — chi sei, cosa ti serve, perché ti serve e per chi è. Più informazioni di sfondo dai, migliori saranno i risultati!",
    tip: "Pensala come chiedere aiuto a un amico: 'Aiutami a scrivere qualcosa' vs 'Sono un insegnante e devo scrivere un avviso ai genitori su una gita scolastica venerdì prossimo. Deve essere caloroso ma informativo, circa 3 frasi.'",
    quiz: [
      {
        id: 1,
        question: "Quale prompt darà risultati migliori?",
        options: [
          { id: "a", text: "Scrivi un'email", isCorrect: false },
          { id: "b", text: "Scrivi un'email professionale al mio responsabile per chiedere il venerdì libero la prossima settimana. Mantieni un tono cortese ma breve, circa 3 frasi.", isCorrect: true },
          { id: "c", text: "Email per favore", isCorrect: false },
        ],
        explanation: "Il prompt ricco di contesto dice all'IA lo scopo, il destinatario, il tono e la lunghezza. Questo sfondo elimina le supposizioni e produce un risultato pertinente.",
      },
      {
        id: 2,
        question: "Cosa c'è di sbagliato nel prompt: 'Aiutami a cucinare la cena'?",
        options: [
          { id: "a", text: "Manca il contesto — niente cucina, ingredienti, livello di abilità o tempo disponibile", isCorrect: true },
          { id: "b", text: "È troppo lungo e complicato", isCorrect: false },
          { id: "c", text: "Niente di sbagliato, è perfetto", isCorrect: false },
        ],
        explanation: "Senza contesto sui tuoi ingredienti, abilità in cucina, esigenze alimentari o tempo disponibile, l'IA non ha le informazioni di base per adattare la risposta alla tua situazione.",
      },
      {
        id: 3,
        question: "Quale tipo di informazione aiuta di più l'IA quando scrive contenuti?",
        options: [
          { id: "a", text: "Dire 'scrivi veloce'", isCorrect: false },
          { id: "b", text: "Fornire contesto: chi leggerà, perché e in quale formato", isCorrect: true },
          { id: "c", text: "Aggiungere 'grazie' alla fine", isCorrect: false },
        ],
        explanation: "Il contesto sul pubblico, lo scopo e il formato dà all'IA un quadro chiaro. Istruzioni vaghe o cortesie non migliorano la qualità dell'output.",
      },
      {
        id: 4,
        question: "Scegli il prompt con il contesto migliore:",
        options: [
          { id: "a", text: "Fai un logo", isCorrect: false },
          { id: "b", text: "Progetta un logo blu minimalista per un bar chiamato 'Caffè & Gusto' rivolto a giovani professionisti", isCorrect: true },
          { id: "c", text: "Logo per attività", isCorrect: false },
        ],
        explanation: "Questo prompt fornisce contesto sul brand, lo stile, il pubblico e lo scopo — dando all'IA tutto il necessario per creare qualcosa di rilevante.",
      },
      {
        id: 5,
        question: "Perché fornire contesto funziona meglio che scrivere semplicemente più parole?",
        options: [
          { id: "a", text: "L'IA si diverte a leggere testi più lunghi", isCorrect: false },
          { id: "b", text: "Il contesto elimina le ipotesi e aiuta l'IA a capire la tua vera esigenza", isCorrect: true },
          { id: "c", text: "È considerato educato verso l'IA", isCorrect: false },
        ],
        explanation: "Non si tratta di scrivere di più — si tratta di dare le giuste informazioni di sfondo. Contesto come scopo, pubblico e vincoli aiuta l'IA a concentrarsi su ciò di cui hai davvero bisogno.",
      },
    ],
  },
  {
    id: 2,
    title: "Chiedi 'Di cosa hai bisogno?'",
    concept: "Lascia che l'IA ti aiuti",
    description: "Ecco un segreto: puoi chiedere all'IA di quali informazioni ha bisogno per aiutarti meglio. Questo fa risparmiare tempo e ottiene risultati migliori!",
    tip: "Inizia il tuo prompt con: 'Prima di rispondere, quali informazioni ti servono per darmi la migliore risposta possibile?'",
    quiz: [
      {
        id: 1,
        question: "Quale approccio è più intelligente per iniziare un compito complesso?",
        options: [
          { id: "a", text: "Dire semplicemente 'Aiutami a scrivere un business plan'", isCorrect: false },
          { id: "b", text: "Chiedere: 'Voglio scrivere un business plan. Quali informazioni ti servono da parte mia per creare il miglior piano possibile?'", isCorrect: true },
          { id: "c", text: "Rinunciare perché è troppo complicato", isCorrect: false },
        ],
        explanation: "Chiedere all'IA cosa serve la trasforma in un collaboratore. Potrebbe chiederti del settore, mercato target, budget e obiettivi - cose che potresti aver dimenticato di menzionare!",
      },
      {
        id: 2,
        question: "Quando dovresti chiedere all'IA di quali informazioni ha bisogno?",
        options: [
          { id: "a", text: "Solo per compiti semplici come 'scrivi una poesia'", isCorrect: false },
          { id: "b", text: "Per compiti complessi o poco familiari dove potresti tralasciare dettagli importanti", isCorrect: true },
          { id: "c", text: "Mai - dovresti sempre sapere cosa includere", isCorrect: false },
        ],
        explanation: "Per compiti complessi, l'IA spesso sa quali domande fare che tu non penseresti. È come consultare un esperto che ti guida nel processo.",
      },
      {
        id: 3,
        question: "Qual è il vantaggio di lasciare che l'IA faccia domande di chiarimento?",
        options: [
          { id: "a", text: "Rende la conversazione più lunga", isCorrect: false },
          { id: "b", text: "Aiuta a scoprire dettagli che potresti aver dimenticato di menzionare", isCorrect: true },
          { id: "c", text: "È solo cortesia", isCorrect: false },
        ],
        explanation: "L'IA può identificare lacune nella tua richiesta che non sapevi nemmeno esistessero. Questo approccio collaborativo porta a risultati finali molto migliori.",
      },
      {
        id: 4,
        question: "Vuoi aiuto per organizzare una festa di compleanno. Qual è il miglior primo messaggio?",
        options: [
          { id: "a", text: "Organizza una festa di compleanno", isCorrect: false },
          { id: "b", text: "Devo organizzare una festa di compleanno. Prima di iniziare, quali dettagli ti servono per darmi i migliori suggerimenti?", isCorrect: true },
          { id: "c", text: "Idee per festa subito", isCorrect: false },
        ],
        explanation: "Chiedendo prima, l'IA potrebbe informarsi sull'età del festeggiato, interessi, budget, luogo, numero di invitati e preferenze sul tema - creando un piano molto migliore.",
      },
      {
        id: 5,
        question: "In cosa si trasforma l'IA quando chiedi 'Di cosa hai bisogno?'",
        options: [
          { id: "a", text: "Un assistente più lento e fastidioso", isCorrect: false },
          { id: "b", text: "Un partner collaborativo che ti aiuta a ragionare sul problema", isCorrect: true },
          { id: "c", text: "Una macchina che fa domande senza risposte", isCorrect: false },
        ],
        explanation: "Questa tecnica trasforma l'IA da strumento unidirezionale a collaboratore interattivo che ti aiuta attivamente a definire e risolvere il tuo problema.",
      },
    ],
  },
  {
    id: 3,
    title: "Usa degli esempi",
    concept: "Mostra, non raccontare",
    description: "Gli esempi insegnano all'IA meglio delle spiegazioni. Se vuoi uno stile o formato specifico, mostra cosa intendi!",
    tip: "Dì 'Ecco un esempio di quello che cerco:' e poi incolla un campione. L'IA seguirà quello stile.",
    quiz: [
      {
        id: 1,
        question: "Quale prompt dà indicazioni più chiare?",
        options: [
          { id: "a", text: "Scrivi una descrizione prodotto accattivante per la mia tazza da caffè", isCorrect: false },
          { id: "b", text: "Scrivi una descrizione prodotto per la mia tazza da caffè. Ecco un esempio dello stile che mi piace: 'Inizia la tua giornata nel modo giusto con la nostra tazza in ceramica artigianale. Ogni sorso sembra un abbraccio caldo.'", isCorrect: true },
          { id: "c", text: "Descrizione prodotto. Falla bene.", isCorrect: false },
        ],
        explanation: "L'esempio mostra esattamente il tono, la lunghezza e lo stile che desideri. L'IA può replicarlo perfettamente invece di indovinare cosa significa 'accattivante' per te.",
      },
      {
        id: 2,
        question: "Perché gli esempi sono più efficaci che descrivere quello che vuoi?",
        options: [
          { id: "a", text: "Gli esempi sono più brevi da scrivere", isCorrect: false },
          { id: "b", text: "Gli esempi mostrano esattamente cosa intendi, eliminando le interpretazioni soggettive", isCorrect: true },
          { id: "c", text: "L'IA non capisce le descrizioni", isCorrect: false },
        ],
        explanation: "Parole come 'professionale', 'informale' o 'creativo' significano cose diverse per persone diverse. Un esempio elimina ogni ambiguità.",
      },
      {
        id: 3,
        question: "Quando chiedi template per email, qual è l'approccio migliore?",
        options: [
          { id: "a", text: "Dire 'scrivila professionalmente'", isCorrect: false },
          { id: "b", text: "Incollare un'email che ti è piaciuta e dire 'scrivi in questo stile'", isCorrect: true },
          { id: "c", text: "Chiedere semplicemente un qualsiasi template email", isCorrect: false },
        ],
        explanation: "Mostrare all'IA un'email che ti è piaciuta le dà un punto di riferimento perfetto. Può replicare tono, struttura e lunghezza con precisione.",
      },
      {
        id: 4,
        question: "Vuoi post per social media con una voce specifica. Cosa dovresti fare?",
        options: [
          { id: "a", text: "Descrivere la voce come 'divertente e coinvolgente'", isCorrect: false },
          { id: "b", text: "Condividere 2-3 post di esempio che ti piacciono e chiederne di simili", isCorrect: true },
          { id: "c", text: "Sperare che l'IA ci arrivi da sola", isCorrect: false },
        ],
        explanation: "Più esempi aiutano l'IA a capire i pattern del tuo stile preferito - le scelte lessicali, l'uso delle emoji, la lunghezza delle frasi e l'atmosfera generale.",
      },
      {
        id: 5,
        question: "Qual è un buon modo per introdurre un esempio nel tuo prompt?",
        options: [
          { id: "a", text: "Semplicemente incollarlo senza contesto", isCorrect: false },
          { id: "b", text: "Dire 'Ecco un esempio di quello che cerco:' e poi incollarlo", isCorrect: true },
          { id: "c", text: "Non usare esempi, descrivi di più", isCorrect: false },
        ],
        explanation: "Etichettare chiaramente il tuo esempio aiuta l'IA a capire che è un riferimento da seguire, non contenuto da modificare o a cui rispondere.",
      },
    ],
  },
  {
    id: 4,
    title: "Usa le virgolette per i testi",
    concept: "Sii cristallino",
    description: "Quando includi del testo su cui vuoi che l'IA lavori (come qualcosa da riassumere o tradurre), mettilo tra virgolette o segnalalo chiaramente. Questo aiuta l'IA a distinguere le tue istruzioni dal contenuto.",
    tip: "Usa le virgolette o dì 'Ecco il testo:' seguito dal contenuto su una nuova riga.",
    quiz: [
      {
        id: 1,
        question: "Quale formato è più chiaro?",
        options: [
          { id: "a", text: "Riassumi questa riunione è stata produttiva abbiamo discusso gli obiettivi Q3 e deciso di lanciare a ottobre", isCorrect: false },
          { id: "b", text: "Riassumi il seguente testo:\n\n\"Questa riunione è stata produttiva. Abbiamo discusso gli obiettivi Q3 e deciso di lanciare a ottobre.\"", isCorrect: true },
          { id: "c", text: "Riassunto riunione Q3 ottobre lancio produttiva", isCorrect: false },
        ],
        explanation: "Le virgolette e la formattazione rendono ovvio dove finisce la tua istruzione e inizia il contenuto. Questo previene confusione e assicura risultati accurati.",
      },
      {
        id: 2,
        question: "Perché è importante separare le istruzioni dal contenuto?",
        options: [
          { id: "a", text: "Rende il prompt più carino", isCorrect: false },
          { id: "b", text: "Previene che l'IA confonda le tue istruzioni con il testo da elaborare", isCorrect: true },
          { id: "c", text: "Non è importante per niente", isCorrect: false },
        ],
        explanation: "Senza una separazione chiara, l'IA potrebbe includere parti delle tue istruzioni nell'output, o tralasciare parti del contenuto che volevi elaborare.",
      },
      {
        id: 3,
        question: "Vuoi tradurre un paragrafo. Qual è il formato migliore?",
        options: [
          { id: "a", text: "Traduci in inglese ciao come stai oggi", isCorrect: false },
          { id: "b", text: "Traduci in inglese:\n\n\"Ciao, come stai oggi?\"", isCorrect: true },
          { id: "c", text: "Inglese: ciao come stai oggi", isCorrect: false },
        ],
        explanation: "Il formato chiaro mostra esattamente cosa deve essere tradotto. I due punti e le virgolette creano un confine inequivocabile tra istruzione e contenuto.",
      },
      {
        id: 4,
        question: "Cosa succede se non segni chiaramente il testo che vuoi analizzare?",
        options: [
          { id: "a", text: "Niente, l'IA capisce sempre", isCorrect: false },
          { id: "b", text: "L'IA potrebbe confondere le tue istruzioni con il contenuto, dando risultati sbagliati", isCorrect: true },
          { id: "c", text: "L'IA ti chiederà di riformattare", isCorrect: false },
        ],
        explanation: "Senza marcatori chiari, l'IA deve indovinare dove finiscono le istruzioni e inizia il contenuto. Questo porta spesso a parti mancanti o mal interpretate.",
      },
      {
        id: 5,
        question: "Qual è il modo migliore per segnalare il testo su cui l'IA deve lavorare?",
        options: [
          { id: "a", text: "Usare MAIUSCOLO per il testo", isCorrect: false },
          { id: "b", text: "Usare virgolette, o introdurre con 'Ecco il testo:' su una nuova riga", isCorrect: true },
          { id: "c", text: "Metterlo all'inizio del messaggio", isCorrect: false },
        ],
        explanation: "Le virgolette e le etichette chiare sono marcatori universalmente compresi. Creano separazione visiva che aiuta l'IA a interpretare correttamente la tua richiesta.",
      },
    ],
  },
  {
    id: 5,
    title: "Assegna dei ruoli",
    concept: "Prepara la scena",
    description: "Dì all'IA chi è! Quando dai all'IA un ruolo, questa adatta le sue conoscenze, il tono e l'approccio per corrispondere a quel personaggio.",
    tip: "Inizia con 'Sei un...' o 'Agisci come un...' seguito da un ruolo specifico come 'insegnante amichevole', 'chef esperto' o 'agente di supporto clienti paziente'.",
    quiz: [
      {
        id: 1,
        question: "Quale prompt prepara un'interazione migliore?",
        options: [
          { id: "a", text: "Spiega la fisica quantistica", isCorrect: false },
          { id: "b", text: "Sei un insegnante di scienze amichevole che spiega argomenti complessi usando esempi quotidiani. Spiega la fisica quantistica a un bambino curioso di 10 anni.", isCorrect: true },
          { id: "c", text: "Serve spiegazione di fisica", isCorrect: false },
        ],
        explanation: "Assegnando il ruolo di 'insegnante di scienze amichevole' e specificando il pubblico, ottieni una spiegazione davvero comprensibile, non una lezione tecnica!",
      },
      {
        id: 2,
        question: "Cosa fa effettivamente assegnare un ruolo all'IA?",
        options: [
          { id: "a", text: "Niente, è solo per divertimento", isCorrect: false },
          { id: "b", text: "Adatta il tono, il vocabolario e l'approccio dell'IA per corrispondere a quel personaggio", isCorrect: true },
          { id: "c", text: "Confonde l'IA", isCorrect: false },
        ],
        explanation: "I ruoli funzionano come un potente contesto. Un 'avvocato' userà linguaggio formale e citerà precedenti, mentre un 'vicino amichevole' sarà informale e alla mano.",
      },
      {
        id: 3,
        question: "Hai bisogno di aiuto per il debug del codice. Quale ruolo sarebbe più utile?",
        options: [
          { id: "a", text: "Sei un poeta", isCorrect: false },
          { id: "b", text: "Sei un ingegnere software senior con 10 anni di esperienza nel debugging", isCorrect: true },
          { id: "c", text: "Sei uno chef", isCorrect: false },
        ],
        explanation: "Associare il ruolo al tuo compito assicura che l'IA affronti il problema con la giusta competenza e prospettiva.",
      },
      {
        id: 4,
        question: "Qual è il modo migliore per iniziare un'assegnazione di ruolo?",
        options: [
          { id: "a", text: "Forse potresti fare tipo un...", isCorrect: false },
          { id: "b", text: "Sei un... o Agisci come un...", isCorrect: true },
          { id: "c", text: "Se vuoi, fingi di essere...", isCorrect: false },
        ],
        explanation: "Affermazioni dirette come 'Sei' o 'Agisci come' stabiliscono chiaramente il ruolo. Un linguaggio esitante indebolisce l'istruzione.",
      },
      {
        id: 5,
        question: "Vuoi consigli per aprire una piccola pasticceria. Quale prompt di ruolo è migliore?",
        options: [
          { id: "a", text: "Dammi consigli per pasticceria", isCorrect: false },
          { id: "b", text: "Sei un consulente aziendale esperto specializzato in attività alimentari. Aiutami a pianificare la mia nuova pasticceria.", isCorrect: true },
          { id: "c", text: "Fai la persona di affari", isCorrect: false },
        ],
        explanation: "Il ruolo specifico 'consulente aziendale specializzato in attività alimentari' porta esattamente la giusta competenza - conoscenza aziendale generale più specifiche del settore alimentare.",
      },
    ],
  },
];
