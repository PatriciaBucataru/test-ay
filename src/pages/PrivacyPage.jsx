import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <nav className="bg-[#6b7c5e] text-white py-6">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/images/logo pn.png"
              alt="House of Aya"
              className="w-10 h-10"
            />
            <span className="font-display text-xl">HOUSE OF AYA</span>
          </Link>
          <Link to="/" className="font-body text-sm tracking-wider hover:text-[#f4d03f] transition-colors">
            ← Înapoi acasă
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/images/logo pn.png"
              alt="AYA"
              className="w-12 h-12 animate-breathe drop-shadow-lg"
            />
            <h1 className="font-display text-4xl lg:text-5xl text-[#6b7c5e]">
              Politică de confidențialitate
            </h1>
          </div>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#6b7c5e]/90 font-body leading-relaxed">

            <div className="text-center mb-8">
              <h3 className="font-display text-3xl text-[#6b7c5e] mb-4">
                NOTĂ DE INFORMARE CU PRIVIRE LA PRELUCRAREA DATELOR<br/>
                DUMNEAVOASTRĂ CU CARACTER PERSONAL DE CĂTRE HOUSE OF AYA
              </h3>
            </div>

            {/* Section 1 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">1. INTRODUCERE</h3>
              <p className="mb-3">
                În acest document vă informăm despre modul în care YAGE CONCEPT SRL (House of Aya
                sau după caz, noi) prelucrează datele dumneavoastră cu caracter personal, în calitatea noastră
                de operator de date cu caracter personal. Vă rugăm să citiți în întregime acest document și să
                vă asigurați că îl înțelegeți. În situația în care aveți neclarități cu privire la conținutul
                documentului, vă rugăm să ne contactați utilizand datele de contact indicate la punctul 9 de mai
                jos.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">2. DATELE DUMNEAVOASTRĂ PE CARE LE PRELUCRĂM, SCOPURILE ȘI TEMEIUL PRELUCRĂRII</h3>

              <p className="mb-3">
                <strong>Încheierea contractelor.</strong> În cele mai multe cazuri, prelucrăm datele dumneavoastră cu caracter
                personal pentru a va putea oferi serviciile solicitate. Vor putea fi prelucrate următoarele tipuri
                de date: email, nume, prenume, număr de telefon, data nașterii iar în cazul serviciului de
                antrenor personal, date privind starea de sănătate. Temeiurile prelucrării datelor de mai sus sunt
                încheierea și executarea contractului de dintre noi și dumneavoastră.
              </p>

              <p className="mb-3">
                <strong>i. Prelucrarea datelor după încetarea contractului.</strong> Este posibil să prelucrăm datele
                dumneavoastră pentru constatarea, exercitarea sau apărarea drepturilor sau a intereselor noastre
                sau ale altor persoane înaintea instanțelor de judecată, a executorilor judecătorești, a notarilor
                publici, a altor autorități publice, a tribunalelor arbitrale, a mediatorilor sau a altor organisme
                publice sau private care soluționează dispute, a avocaților, consultanților noștri sau ale altor
                persoane fizice sau juridice, publice sau private, care sunt implicate în acele dispute sau
                negocieri. În această situație, vom prelucra datele dumneavoastră cu caracter personal, după
                caz, în temeiul îndeplinirii unor obligații legale care ne revin sau al intereselor noastre legitime
                de a ne apăra drepturile și interesele. În acest caz, datele pe care le prelucrăm cu privire la
                dumneavoastră (în calitate de client), includ: numele și prenumele; adresa de corespondență;
                alte date incluse în facturile emise către dumneavoastră.
              </p>

              <p className="mb-3">
                <strong>ii. Realizarea unor operațiuni corporative.</strong> În cadrul unor operațiuni de vânzare a părților
                sociale, restructurare și a altor activități similare, putem prelucra datele dumneavoastră prin
                divulgarea către anumiți consultanți, potențiali cumpărători, autorități publice sau alte persoane.
                Temeiul prelucrării este fie interesul nostru legitim de a participa în mod eficient la astfel de
                operațiuni corporative, fie îndeplinirea unor obligații legale.
              </p>

              <p className="mb-3">
                <strong>iii. Rezolvarea unor cereri sau întrebări ale dumneavoastră.</strong> Dacă ne trimiteți orice cereri
                ori întrebări, vom prelucra datele dumneavoastră pentru a le putea soluționa. În aceste cazuri,
                datele prelucrate pot include: nume, prenume; adresă de email; conținutul cererii
                dumneavoastră. Temeiul prelucrării este, în acest caz, consimțământul dumneavoastră.
              </p>

              <p className="mb-3">
                <strong>iv. Cookies.</strong> Site-ul www.houseofaya.ro utilizează module cookie pentru a asigura o experiență
                personalizată a utilizatorului, salvand unele preferințe pe care dumneaovoastră le manifestați
                atunci cand accesați site-ul. De fiecare dată când accesaţi pagina, site-ul web va trimite cookieuri pe computerul dumneavoastră și va accesa astfel de module cookie.
              </p>
              <p className="mb-3">
                Pe site-ul houseofaya.ro, cookie-urile sunt utilizate în diferite locații pentru a oferi servicii mai
                personalizate, mai eficiente și mai sigure. Cookie-urile sunt potrivite pentru a produce statistici
                agregate anonime care ne ajută să înțelegem mai bine modul în care oamenii folosesc paginile
                House of Aya, permițându-ne să îmbunătățim structura și conținutul acestor pagini. În
                conformitate cu politica de securitate a House of Aya, cookie-urile sunt protejate împotriva
                accesului neautorizat de către terți.
              </p>
              <p className="mb-3">
                Pentru detalii privind politica de cookie a House of Aya, vizitați politica de cookie. Temeiul
                prelucrării datelor personale colectate prin cookies este consimțământul dumneavoastră.
              </p>

              <p className="mb-3">
                <strong>v. Transmiterea de oferte din inițiativa noastră, ca urmare a acordului dumneavoastră.</strong> În
                situația în care ați fost de acord să vă trimitem comunicări (SMS-uri, email-uri etc.) privind
                serviciile și promoțiile noastre, vă vom prelucra anumite date pentru a putea să vă transmitem
                astfel de informații. Datele pe care le vom prelucra includ: numele și prenumele; număr de
                telefon, adresa de e-mail.
              </p>

              <p className="mb-3">
                <strong>vi. Date colectate în perioada de recrutare.</strong> Vor fi prelucrate datele transmise de
                dumneavoastră prin intermediul CV-ului. Datele vor fi șterse la finalul perioadei de recrutare.
                Temeiul prelucrării este, în acest caz, consimțământul dumneavoastră.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">3. SURSA DATELOR</h3>
              <p className="mb-3">
                Primim chiar de la dumneavoastră majoritatea datelor cu caracter personal pe care le prelucrăm.
                Aceste categorii de date sunt următoarele: numele și prenumele; număr de telefon, adresa de
                email; adresa de domiciliu; adresa de corespondență. În acest caz, temeiul prelucrării este
                necesitatea executării contractului de prestări servicii dintre societățile din House of Aya și
                dumneavoastră.
              </p>
              <p className="mb-3">
                Totodată, putem prelucra datele dumneavoastră și în cazul procedurii de recrutare.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">4. DIVULGAREA DATELOR</h3>
              <p className="mb-3">
                Datele dumneavoastră vor fi transferate către furnizori externi (ex: antrenori) exclusiv în scopul
                desfășurării contractului încheiat între dumneavoastră cu noi sau în cazul în care avem
                consimțământul dumneavoastră expres și prealabil.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">5. STOCAREA DATELOR DUMNEAVOASTRĂ</h3>
              <p className="mb-3">
                Vom păstra datele dumneavoastră potrivit politicii noastre de stocare a datelor cu caracter
                personal, perioada stocării fiind diferită în funcție de scopul pentru care le folosim și de
                categoria de date. Politica noastră are la bază prevederile legale (inclusiv legislația protecției
                datelor cu caracter personal). Există, de asemenea, situații în care legislația din alte domenii
                (cum ar fi normele de contabilitate sau arhivare) ne impun să stocăm datele dumneavoastră
                pentru o anumită perioadă de timp. Acolo unde nu există o perioadă de stocare stabilită într-o
                lege, vom avea în vedere termenele de prescripție aplicabile, alături de practicile recomandate
                în domeniul protecției datelor.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">6. TRANSFERUL DATELOR DUMNEAVOASTRĂ CĂTRE O ȚARĂ TERȚĂ SAU ORGANIZAȚIE INTERNAȚIONALĂ</h3>
              <p className="mb-3">
                În acest moment nu transferăm și nu intenționăm să transferăm datele dumneavoastră cu
                caracter personal către entități din țări terțe sau către organizații internaționale cu excepția
                informațiilor colectate prin intermediul fișierelor cookie (pentru mai multe informații vă rugăm
                să parcurgeți Politica de cookie). Dacă va fi cazul unui transfer, vă vom informa în prealabil și,
                dacă este cazul, vă vom solicita acordul.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">7. CARE SUNT DREPTURILE DUMNEAVOASTRĂ ȘI CUM LE PUTEȚI EXERCITA</h3>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li><strong>Dreptul de acces la date.</strong> Aveţi dreptul să accesați datele dumneavoastră pe care le
                prelucrăm sau le controlăm sau copii ale acestora. De asemenea, aveți dreptul să obţineți
                de la noi informaţii privind natura, prelucrarea şi divulgarea acestor date.</li>
                <li><strong>Dreptul la rectificarea datelor.</strong> Aveţi dreptul să obțineți rectificarea datelor
                dumneavoastră pe care le prelucrăm sau le controlăm, dacă acestea nu sunt exacte.</li>
                <li><strong>Dreptul la ştergerea datelor.</strong> Aveţi dreptul să obțineți ştergerea datelor dumneavoastră
                pe care le prelucrăm sau le controlăm.</li>
                <li><strong>Dreptul la restricţionarea prelucrării datelor.</strong> Aveţi dreptul să restricționați
                prelucrarea datelor dumneavoastră pe care le prelucrăm sau le controlăm.</li>
                <li><strong>Dreptul de a obiecta.</strong> Aveţi dreptul să obiectați cu privire la prelucrarea datelor
                dumneavoastră de către noi sau în numele nostru.</li>
                <li><strong>Dreptul la portabilitatea datelor.</strong> Aveţi dreptul să obțineți către un alt operator al
                datelor dumneavoastră pe care le prelucrăm sau le controlăm.</li>
                <li><strong>Dreptul la retragerea consimţământului.</strong> În situaţiile în care prelucrăm datele
                dumneavoastră cu acordul dumneavoastră, aveţi dreptul să vă retrageți consimţământul,
                fără a afecta legalitatea prelucrării de dinainte de retragere.</li>
                <li><strong>Dreptul de a depune o plângere la autoritatea de supraveghere.</strong> Aveți dreptul să
                depuneți o plângere la autoritatea de supraveghere a prelucrării datelor cu caracter
                personal (Autoritatea Națională pentru Supravegherea Prelucrării Datelor cu Caracter
                Personal – ANSPDCP) cu privire la prelucrarea datelor dumneavoastră de către noi sau
                în numele nostru.</li>
              </ul>
              <p className="mb-3">
                Pentru a vă exercita drepturile și, în situațiile în care vă prelucrăm datele cu consimțământul
                dumneavoastră, pentru a vă retrage acordul, vă rugăm să ne contactați la detaliile de contact de
                mai jos. De asemenea, în măsura în care aveți nevoie de informații suplimentare sau clarificări,
                vă rugăm să nu ezitați să ne contactați.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">8. CE SE POATE ÎNTÂMPLA DACĂ NU NE FURNIZAŢI DATELE</h3>
              <p className="mb-3">
                Nu sunteți obligat(ă) să ne furnizați datele dumneavoastră la care facem referire în acest
                document. Aveți libertatea de a decide ce date alegeți să ne transmiteți. Totuși, dacă nu ne oferiți
                datele pe care le-am solicitat la punctele 2 (i) – (iii) de mai sus, atunci nu va fi posibil pentru
                noi să vă oferim serviciile noastre menționate mai sus – acestea fiind esențiale pentru încheierea
                contractului dintre House of Aya și dumneavoastră.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">9. DATELE NOASTRE DE CONTACT</h3>
              <p className="mb-3">
                <strong>YAGE CONCEPT SRL</strong><br/>
                BUCUREȘTI SECTOR 1, STRADA MADRIGALULUI, NR. 58
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
