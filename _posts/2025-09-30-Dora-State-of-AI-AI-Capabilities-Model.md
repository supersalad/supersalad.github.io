---
title: DORA State of AI - Förutsättningar för lyckat införande av AI för utvecklare
excerpt: Nyckeln till ROI från AI investeringar - bra DevEx, vässade flöden och processer.
layout: post
tags:
  - AI
  - DORA
  - Utveckling
image: 
  path: /assets/images/dora_banner.webp
  thumbnail: /assets/images/dora_400x200.webp

---

*DORA är ett löpande forskningsprojekt som undersöker kopplingar mellan hur systemutveckling bedrivs och önskade utkomster som ökad lönsamhet, tillväxt, minskad utbrändhet, etc. Läs mer på [DORA.dev](https://dora.dev){:target="_blank" rel="noopener noreferrer"}*

#### AI vs GenAI vs LLMs etc
Precis som med andra begrepp i vår branch slarvas det med vad saker egentligen betyder. **Artificiell Intelligens (AI)** säger i sig inte så mycket om vad vi menar. I det följande menar jag vertyg och agenter (system som kan agera helt eller delvis på egen hand) som i någon mån utnyttjar **Large Language Models (LLM)** - och den verktygsflora som växer fram kring den här tekniken.


### Från *om* till *hur*
AI i systemutveckling är inte längre en fråga om **om** du ska använda det, utan **hur** du får ut värde av det. Enligt årets DORA-rapport använder redan 90% av utvecklare AI i någon form. Ändå är 30% skeptiska till kvaliteten i AI-genererad kod.  
Alla använder det, men ingen litar på det.  
Jag kan tycka att det är helt i sin ordning.  
LLM:er ska inte fatta beslut som kan påverka dina systems beteenden. Använd, men verifiera.  
Knäckfrågan blir hur väl infrastrukturen kring verifiering fungerar.

Och här någonstans blir det intressant. DORA:s slutsats är tydlig: **AI är en förstärkare.**  
Det betyder att starka team och välfungerande organisationer får bättre resultat – medan de som redan kämpar riskerar att få sina problem förvärrade.

> If 11 years of DORA have taught us anything, it’s that the technical practices and processes of an organization are intimately tied to software delivery performance. 
Lacking these foundational capabilities can completely neutralize any gains from AI.

Den stora risken är alltså inte att bli frånåkt av konkurrenter, utan att man strösslar AI-verktyg blint och därmed (i värsta fall) accelererar kaoset i sina egna processer.

### AI som förstärkare
Man kan uttrycka det som: *det som är bra för människor är bra för AI.*  
Om dina utvecklingsmiljöer, processer och arbetsflöden är sunda, kommer AI att göra det ännu bättre.  
Om de är trasiga, kommer AI bara att producera mer av samma trasighet – snabbare.

DORA pekar på just detta: lokala produktivitetsvinster på individnivå är vanliga.  
Utvecklare rapporterar högre produktivitet och ibland även bättre kodkvalitet.  
Men dessa vinster riskerar att gå upp i rök om de inte backas upp av en organisation som kan ta emot, validera och förvalta AI-producerat arbete.

Med andra ord: om du bara mäter på individnivå (”utvecklarna är nöjda, de kodar mer”), kan du lätt missa att du samtidigt har tappat i ledtider, stabilitet och kvalitet på systemnivå.

### DORA AI Capabilities Model – sju förutsättningar
Årets rapport introducerar en **AI Capabilities Model** med sju fundament som avgör om AI blir en hävstång eller ett sänke:

1. **Tydlig AI-policy**  
   Inte ett dokument som samlar damm, utan en gemensam förståelse:  
   var får AI användas, var inte? Vad är förväntat och tillåtet?  
   Osäkerhet kring de här frågorna riskerar att stoppa experiment, innovation och den kompetenshöjning som kommer av det.  

2. **Hälsosamt data-ekosystem**  
   AI äter data till frukost. Har du kvalitet, tillgänglighet och konsistens i din data, eller snackar vi silos av varierande kvalitet?  
   Dålig data = dåliga AI-resultat.  

3. **Intern data tillgänglig för AI**  
   För utveckling handlar det inte bara om kod. Telemetri, backlog, supportärenden, kundfeedback, CI/CD-data, dokumentation och beslutsunderlag – allt detta är guld för AI-verktyg.  
   Men bara om det faktiskt går att komma åt.  

4. **Versionshantering och rollback**  
   Självklarheter, men värt att tänka på. Rollbacks är inte bara teknik, de är ett psykologiskt säkerhetsnät. Utan det vågar du inte experimentera, och experimenterandet är där kunskapen kring AI-verktygen växer och kan utvecklas till något värdefullt.  
   Utöver att det finns ett källkodssystem, har man branching-strategier, verktyg och miljöer som stöttar ett innovativt och experimenterande arbetssätt?  

5. **Små ändringar**  
   Också en klassisk agil princip som blir ännu viktigare när AI är med och producerar kod i hög takt. Stora, klumpiga förändringar parat med AI kan bli ett dyrt haveri.  
   Under överskådlig framtid behövs det människor i loopen, och våra biologiska förutsättningar gör att vi oftare och med större säkerhet kan släppa igenom små, begränsade ändringar.  

6. **Användarfokus**  
   Det är lätt att fastna i fascination över hur mycket kod AI kan spotta ur sig. Men värdet kommer inte från mängden kod, utan från användarnyttan. AI bör förstärka värdeskapandet, inte bara produktionsvolymen.  
   DORA-studien pekar på ett väldigt starkt samband mellan goda utkomster av AI-införande och användar-fokuserade organisationer.  

7. **Starka interna plattformar**  
   Bra plattformar sätter ramar. Det kan kännas som friktion för den enskilde utvecklaren, men för organisationen är det ett skyddsnät. Du minskar risken för att AI kodar sig rakt ut i diket.  

## Riskerna med blind AI-adoption
Att AI används mycket betyder inte att det används rätt. Några saker som sticker ut från rapporten:

* **Skepsis kvarstår:** 30% litar inte på AI-kod. Det är sunt. ”Trust but verify” är en bra hållning, och organisationer bör se till att utvecklarna har både tid och metoder för att validera AI-output.
* **Genomströmning vs stabilitet:** AI har börjat öka throughput, men samtidigt ökar instabiliteten. Snabbhet utan stabilitet är ett luftslott.
* **Fel mätpunkt:** DORA varnar för att titta för mycket på individnivå. En utvecklare kan uppleva att AI gör jobbet lättare, men det betyder inte automatiskt att teamets eller organisationens resultat förbättras.

## Praktiska råd för tekniska ledare
Hur bör du agera om du vill använda AI på ett sätt som ger verkligt värde? Här är fyra startpunkter:

1. **Se över grunderna.**  
   Innan du köper fler AI-licenser – är data tillgänglig, är din interna plattform robust, fungerar versionshanteringen? Det är här värdet avgörs.

2. **Sätt en AI-policy.**  
   Gör tydligt var AI får användas och inte. Inte för att strypa innovation, utan för att ge spelregler som ökar tryggheten.

3. **Investera i kompetenshöjning.**  
   Utvecklare behöver lära sig *hur* man använder AI, inte bara *att* man får använda AI.  
   Fokus bör ligga på att guida, utvärdera och verifiera. Kurser i all ära, men den verkliga vinsten kommer när man får tid att experimentera och lära sig tillsammans. I sin egen kontext. 
   
4. **Mät på rätt nivå.**  
   Fråga inte bara ”tycker ni att AI är bra?” Mät ledtid, genomströmning, stabilitet och användarnöjdhet. Rätt använt kan AI-verktyg flytta nålen för det som är viktigt.  
   Om de inte gör det, se till de grundläggande förutsättningarna ovan.

## Att bygga på rätt sätt har aldrig varit viktigare
DORA:s forskning landar i samma slutsats som mycket av deras tidigare arbete: teknik i sig löser ingenting om inte systemet runt den fungerar. AI är inget undantag – snarare tvärtom.

Så: bygg bra grunder. Satsa på utvecklarupplevelse, datakvalitet, stabila plattformar och tydliga processer. Då blir AI en hävstång för produktivitet och kvalitet. Hoppar du över det steget, riskerar du att AI accelererar och förstärker nuvarande smärtor.

Eller enklare uttryckt: **det som är bra för människor är bra för AI.**

### Vad tycker du?
Min spaning är att AI inte löser något som inte redan fungerar. Vill du diskutera vad det innebär för din organisation? [Ta kontakt](/contact)