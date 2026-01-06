import { Link } from 'react-router-dom';

export default function TermsPage() {
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
              Termeni și Condiții
            </h1>
          </div>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#6b7c5e]/90 font-body leading-relaxed">

            {/* Section 1 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">1. ACCEPTAREA ACESTOR TERMENI</h3>
              <p className="mb-3">
                Accesul dvs. şi utilizarea acestui website www.houseofaya.ro se supune acestor Termeni şi
                Condiţii. Nu veţi folosi acest website în scopuri ilegale sau interzise prin Termenii şi Condiţiile
                care urmează. Prin utilizarea website-ului acceptaţi termenii, condiţiile şi disclaimer-ele din
                această pagină. Dacă nu acceptaţi Termenii şi Condiţiile atunci trebuie să încetaţi utilizarea
                website-ului imediat.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">2. RECOMANDĂRI</h3>
              <p className="mb-3">
                Conţinutul acestui website nu poate fi considerat ca recomandare şi nu ar trebui luat în
                considerare pentru luarea de decizii.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">3. DATE CU CARACTER PERSONAL</h3>
              <p className="mb-3">
                Completarea datelor personale pe acest site reprezintă acordul dumneavoastră ca acestea să
                intre în baza de date a House of Aya și ca House of Aya să prelucreze datele personale
                conform prevederilor Legii nr. 677/2001 pentru protecția persoanelor cu privire la prelucrarea
                datelor cu caracter personal și libera circulație a acestor date.
              </p>
              <p className="mb-3">
                House of Aya va păstra confidențialitatea acestor informații, cu excepția informațiilor
                solicitate de autoritățile legale competente.
              </p>
              <p className="mb-3">
                Trimiterea unei solicitări pe site-ul House of Aya reprezintă acordul ca House of Aya să
                contacteze clienții, direct sau prin partenerii săi contractuali, utilizând datele personale în acest
                scop, pentru a comunica informațiile solicitate prin intermediul formularelor, pentru a primi
                materiale de prezentare și pentru realizarea de campanii de vânzări și de marketing, analize și
                alte activități similare.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">4. MODIFICĂRI ALE WEBSITE-ULUI, SOFTWARE-ULUI ŞI ALE SERVICIILOR</h3>
              <p className="mb-3">House of Aya îşi rezervă dreptul de a:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>modifica sau şterge (temporar sau permanent) website-ul sau orice parte a acestuia fără
                a anunţa, iar dvs. acceptaţi faptul că House of Aya nu este responsabilă pentru asemenea
                modificări sau ştergeri.</li>
                <li>modifica, şterge sau întrerupe orice software, serviciu sau promoţie (inclusiv dar fără a
                se limita la orice preverderi, părţi, licenţe, preţuri) aşa cum sunt promovate pe acest
                website în orice moment, fără a anunţa, iar dvs. acceptaţi faptul că House of Aya nu este
                responsabilă pentru asemenea modificări sau ştergeri.</li>
                <li>modifica sau întrerupe orice voucher promoţional de reducere sau cod de cupon de
                reducere în orice moment cu anunţ prealabil, iar dvs. acceptaţi faptul că House of Aya
                nu este responsabilă pentru asemenea modificări sau ştergeri.</li>
                <li>modifica această înţelegere în orice moment, iar continuarea utilizării website-ului de
                către dvs. după aceste schimbări se va supune acceptării acestor modificări de către dvs.</li>
                <li>păstra informaţiile personale pentru utilizarea de către terţi, dacă permiteţi folosirea
                sistemului de cookies.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">5. LINKURI CĂTRE WEBSITE-URILE TERŢILOR</h3>
              <p className="mb-3">
                Website-ul poate include linkuri către website-urile terţilor, care sunt controlate şi conduse de
                alţii. Orice link spre un alt website nu este o recomandare a acelui website, iar dvs. luaţi la
                cunoştinţă acest fapt şi sunteţi conştienţi de faptul că nu ne asumăm responsabilitatea pentru
                conţinutul sau pentru disponibilitatea acestor website-uri.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">6. COPYRIGHT</h3>
              <p className="mb-3">
                Drepturile asupra Proprietăţii Intelectuale din acest website şi din materialele din acesta sau
                accesibile prin acesta aparţin House of Aya sau licenţelor sale. Website-ul, materialele de pe
                website sau cele accesibile prin acesta şi Drepturile asupra Proprietăţii Intelectuale inerente nu
                pot fi copiate, distribuite, publicate, licenţiate, folosite sau reproduse în niciun fel (în afară de
                măsura strict necesară pentru şi cu scopul legat de accesarea şi utilizarea acestui website).
              </p>
              <p className="mb-3">
                House of Aya şi logo-ul House of Aya sunt mărci înregistrate ce aparţin House of Aya şi nu pot
                fi utilizate, copiate sau reproduse în niciun fel fără acordul scris al House of Aya.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">7. LIMITAREA RĂSPUNDERII</h3>
              <p className="mb-3">
                Website-ul este distribuit pe baza "aşa cum este" şi "disponibil" fără nicio reprezentare sau
                promovare făcută şi fără garanţie de niciun fel expresă sau implicită, incluzând dar fără a se
                limita la garanţiile de calitate satisfăcătoare, fitness pentru un anumit scop, neîncălcare,
                compatibilitate, securitate şi acurateţe.
              </p>
              <p className="mb-3">
                În limita impusă de lege, House of Aya nu va fi trasă la răspundere pentru pierderi indirecte sau
                rezultate sau pentru pierderi de orice fel (incluzând dar nelimitându-se la pierderi de afaceri, de
                oportunităţi, de date, de profituri), ce rezultă din sau în legătură cu folosirea website-ului.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">8. DESPĂGUBIRI</h3>
              <p className="mb-3">
                Sunteţi de acord să despăgubiţi şi să absolviţi House of Aya, angajaţii şi agenţii săi de toate
                răspunderile, taxele legale, stricăciunile, pierderilor, costurilor şi toate celelalte cheltuieli în
                relaţie cu revendicările sau acţiunile aduse împotriva House of Aya apărute din orice încălcare
                a Termenilor şi Condiţiilor de către dvs. sau alte responsabilităţi născute din utilizarea acestui
                website.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">9. ANULARE</h3>
              <p className="mb-3">
                În cazul în care oricare dintre prevederile acestei înţelegeri sunt declarate, de către orice
                autoritate juridică sau de o altă competenţă, nule, anulabile, ilegale sau nonexecutabile în vreun
                fel sau indicative de orice alt fel, ce sunt primite de dvs. sau de noi din partea unei autorităţi
                competente, vom modifica acea prevedere într-o manieră rezonabilă de aşa natură astfel încât
                să se conformeze intenţiilor părţilor fără a intra în ilegalitate sau, la discreţia noastră, prevederile
                în cauză pot fi scoase din această înţelegere, iar prevederile rămase în această înţelegere rămân
                în vigoare.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">10. LEGI APLICABILE ŞI DISPUTE</h3>
              <p className="mb-3">
                Această înţelegere şi toate cele ce rezultă din ea sunt guvernate de şi formulate în acord cu legea
                din România ale cărei curţi au jurisdicţie exclusivă asupra tuturor disputelor ce rezultă din
                această înţelegere, iar dvs. sunteţi de acord că locul de punere în practică al acestei înţelegeri
                este România.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">11. TITLURI</h3>
              <p className="mb-3">
                Titlurile sunt incluse în această înţelegere pentru convenienţă şi nu vor afecta înţelegerea
                acesteia.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h3 className="font-display text-2xl text-[#6b7c5e] mb-4">12. ÎNŢELEGEREA COMPLETĂ</h3>
              <p className="mb-3">
                Aceşti termeni şi aceste condiţii împreună cu alte documente la care se face referinţă expres în
                înţelegere includ întreaga înţelegere dintre noi în legătură cu subiectul exprimat şi înlocuiesc
                orice înţelegeri, aranjamente, angajamente sau propuneri anterioare, scrise sau orale: între noi
                şi acele aspecte. Orice explicaţie orală sau informare orală dată de vreuna dintre cele două părţi
                nu poate altera interpretarea termenilor şi a condiţiilor. Prin acceptarea termenilor şi condiţiilor,
                nu v-aţi bazat pe o altă reprezentare decât cea stipulată în această înţelegere şi sunteţi de acord
                că nu veţi avea nicio cale de atac cu privire la orice falsă reprezentare ce nu a fost exprimată
                expres în această înţelegere.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
