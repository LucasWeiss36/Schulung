function answerTemplate(i, array) {
    i = i + 1;
    let answers = array[currentQuestion]["answers"][`answer_${i}`];
    return /*HTML*/ `
      <div onclick="checkedBox('${i}')" class="card mb-2 answer-card p-2 d-flex flex-row">
        <input class="form-check-input me-2" type="checkbox"  id="answerCheckBox-${i}">
        <label for="answerCheckBox-${i}" id="answer-${i}">${answers}</label>
      </div>
      `;
  }

  function updatedBtn(array) {
    document.getElementById("footer").innerHTML = /*HTML*/`
      <span><b id="current-question">X</b> von <b id="all-questions">Y</b></span>
      <button id="next-btn" onclick="nextQuestion(${checkparameter(array)})" type="button" class="btn btn-primary">Weiter</button>
      `;
  }
  

function HTMLTemplatePSA(){
    return /*HTML*/`
    <h3>Arbeiten mit persönlicher Schutzausrüstung gegen Absturz(PSAgA)</h3>
    <h5>Beispiele von Auffangsystemen</h5>
    <div class="d-flex justify-content-evenly mt-4">
      <div class="d-flex flex-column justify-content-between border border-dark rounded">
        <p class="psa-img-text">Auffangsystem mit Verbindungsmittel und Falldämpfer</p>
        <img class="psa-img" src="img/PSA_1.png" alt="">
      </div>
      <div class="d-flex flex-column justify-content-between border border-dark rounded">
        <p class="psa-img-text">Auffangsysteme mit Höhensicherungsgerät</p>
        <img class="psa-img" src="img/PSA_2.png" alt="">
      </div>
      <div class="d-flex flex-column justify-content-between border border-dark rounded">
        <p class="psa-img-text">Auffangsystem mit mitlaufendem Auffanggerät einschließlich fester Führung/Steigschutzsystem(6)</p>
        <img class="psa-img" src="img/PSA_3.png" alt="">
      </div>
      <div class="d-flex flex-column justify-content-between border border-dark rounded">
        <p class="psa-img-text">Auffangsystem mit mitlaufendem Auffanggerät einschließlich beweglicher Führung</p>
        <img class="psa-img" src="img/PSA_4.png" alt="">
      </div>
    </div>
    <div class="d-flex justify-content-evenly my-4">
      <div class="img-description">
        <p class="m-0">1. Anschlagpunkt</p>
        <p class="m-0">2. Auffanggurt</p>
        <p class="m-0">3. Verbindungsmittel</p>
        <p class="m-0">4. Höhensicherungsgerät mit integrierter Energieabsorbierung</p>
      </div>
      <div class="img-description">
        <p class="m-0">5. Mitlaufendes Auffanggerät</p>
        <p class="m-0">6. Steigschutzsystem</p>
        <p class="m-0">7. Falldämpfer</p>
        <p class="m-0">8. Ein-/Ausführstelle mit Endsicherung</p>
      </div>
      <div class="img-description">
        <p class="m-0">9. Feste Führung</p>
        <p class="m-0">10. Einziehbares Verbindungsmittel</p>
        <p class="m-0">11. Bewegliche Führung</p>
        <p class="m-0">12. Endsicherung</p>
      </div>
    </div>
    <div>
        <h5>Vor dem Arbeiten:</h5>
        <ul>
          <li>Technische und organisatorische Lösungen gegen Absturz prüfen</li>
          <li>Prüfen, ob ein Absturz der Person verhindert oder die Person sicher aufgefangen werden soll</li>
          <li>Gefährdungsbeurteilung erstellen, dabei u.a beachten:</li>
          <ul>
            <li>Absturzhöhe/Freiraum (lichte Höhe)</li>
            <li>Art und Dauer der Tätigkeit</li>
            <li>Körperliche Belastung</li>
            <li>Beschaffenheit und Tragfähigkeit des Standplatz6es und der Anschlageinrichtung</li>
            <li>Beschaffenheit der tiefer liegenden Fläche, der Arbeitsumgebung und der Arbeitsfläche</li>
          </ul>
          <li>Bewertung und Auswahl der PSAgA, dabei u.a. beachten:</li>
          <ul>
            <li>Schutz vor abzuwehrenden Gefahren ohne daraus entstehende größere Gefahr (Anprallen, Hängetrauma)</li>
            <li>Eignung für die am Arbeitsplatz gegebenen Bedingungen (Kantenbeanspruchung, Hitze)</li>
            <li>Eignung entsprechend den ergonomischen Anforderungen sowie die Möglichkeit der Anpassung</li>
            <li>Berechnung der erforderlichen lichten Höhe aus den Angaben des Herstellerss zur Auffangstrecke, zum Sicherheitsabstand und zur Position des Anschlagpunkts</li>
          </ul>
          <li>Theoretische und praktische Unterweisung der für die Benutzung der PSAgA geeigneten Beschäftigten vor der ersten BEnutzzung und mind. 1x jährlich</li>
          <li>Prüfung der PSAgA auf:</li>
          <ul>
            <li>CE-Kennzeichnung, EN-Norm</li>
            <li>Identifikation (Hersteller)</li>
            <li>Rückverfolgung (Chargennummer, Herstellungsjahr -> Gebrauchsdauer)</li>
            <li>Bezeichnung (Typ, Modell)</li>
            <li>Gebrauchsanleitung</li>
          </ul>
          <li>Geeignete Verfahren zur Rettung und Ersten Hilfe festlegen</li>
        </ul>
        <h5>Während der Arbeiten:</h5>
        <ul>
          <li>PSAgA vor jeder Benutz ung durch Sichtprüfung auf Vollständigkeit, ordnungsgemäßen Zustand und einwandfreie Funktion prüfen</li>
          <li>Geeignete Anschlagpunkte [1] festlegen; unbeabsichtigtes Lösen ausschließen</li>
          <li>PSAgA möglichst oberhalb der sie nutzenden Person anschlagen</li>
          <li>Auffanggurt[2] der individuellen Körperform anpassen (max. flache Hand zwischen Gurt und Körper); keine harten Gegenstände im Bereich der Gurtbänder am Körper tragen</li>
          <li>Verbindungsmittel[3] straff halten, nicht knoten und nicht behelfsmäßig verlängern</li>
          <li>Steigschuttzsysteme [6] nur mit Auffanggurt[2] mit vorderer Steigschutzöse oder Auffangöse (nach Gebrauchsanleitung des Herstellers) benutzen</li>
          <li>Höhensicherungsgeräte [4] nicht pber Stoffen verwenden, in denen man versinken kann</li>
          <li>Werden mehrere PSA gleichzeitig von einer Person benutzt, müssen die Schutzausrüstungen so aufeinander abgestimmt sein, dass die Schutzwirkung der einzelnen Ausrüstungen nicht beeinträchtigt wird</li>
          <li>Wirksamkeit der Sicherheitmaßnahmen überprüfen; Arbeiten unter Einsatz der PSAgA laufend kontrollieren</li>
        </ul>
        <h5>Nach dem Arbeiten</h5>
        <ul>
          <li>Beschädigte oder durch Absturz beanspruchte PSAgA nicht weiterverweden</li>
          <li>Pflege der PSAgA: Gebrauchsanleitung beachten, Verschmutzung abbürsten, bei Bedarf waschen</li>
          <li>Aufbewahrung der PSAgA:</li>
          <ul>
            <li>entfernt vonn Heizungen lagern</li>
            <li>keiner direkten Lichteinwirkungen aussetzen</li>
            <li>freihängend in trockenen Räumen aufbewahren</li>
            <li>vor schädigenden Einflüssen schützen</li>
          </ul>
          <li>Prüfung der PSAgA durch Sachkundige(n) nach Bedarf, jedoch mind. 1x jährlich</li>
        </ul>
    </div>
    <div class="d-flex justify-content-end mt-5">
      <button id="next-btn" onclick="" type="button" class="btn btn-primary">Weiter</button>
    </div>
    `;
  }

  function HTMLTemplateLadders(){
    return /*HTML*/ `
    <h3>Sichere Arbeitsplätze</h3>
    <div class="d-flex gap-5 mt-3">
        <div class="w-min-content d-flex justify-content-end flex-column-reverse gap-3">
            <p class="text-body-tertiary border rounded border-primary-subtle p-2">Arbeiten auf Standplätzen ab 3,0m sind für Jugendliche verboten, für Lehrlinge nach 18 Monaten unter Aufsicht erlaubt</p>
            <img class="ladders-img border border-dark rounded" src="img/Leiter_1.png" alt="">
        </div>
            <div class="d-flex flex-column ">
                <div class="mb-2">
                    <h5>Anlegeleitern</h5>
                    <ul>
                        <li>Größte Länge von einteiligen Anlegeleitern: 8,0m</li>
                        <li>Die Leiter muss mind. 1,0m über die oberste Auftrittstelle hinausragen</li>
                        <li>Die Sporen müssen:</li>
                        <ul>
                            <li>fest mit den  Holmen verbunden und trittsicher sein</li>
                            <li>gleiche Abstände voneinander haben (max. 30cm)</li>
                        </ul>
                        <li>Abrutschen der Leiter verhindern durch Sicherung:</li>
                        <ul>
                            <li>der Leiterfüße</li>
                            <li>des oberen Anlegepunktes</li>
                        </ul>
                        <li>Solange der Fußpunkt nicht gesichert ist, muss ein Helfer die Leiter Sichern</li>
                        <li>Schadhafte Leitern nicht weiter benutzen</li>
                        <li>Leitern nicht behelfsmäßig verlängern</li>
                        <li>Der Anstellwinkel soll etwa 70° betragen</li>
                        <li>Im Verkehrsbereich Leitern durch Absperrung oder Kennzeichnung sichern</li>
                        <li>Beim Aufsteigen den Körperschwerpunkt immer zwischen den Hilmen halten</li>
                        <li>Anlegeletern nicht als Auflager für Gerüstteile oder Laufstege benutzen</li>
                        <li>Das Mitführen von Werkzeugen und Material ist nur in geringem Umfang erlaubt</li>
                        <li>Arbeiten in mehr als 5,0m Höhe sind nur kurzfristig und im Greifraum erlaubt</li>
                    </ul>
                </div>
                <div class="d-flex justify-content-end align-items-end gap-5 me-5">
                    <div class="me-5">
                        <img class="border border-dark rounded" src="img/Leiter_2.png" alt="">
                        <p>Anbinden</p>
                    </div>
                    <div>
                        <div class="me-5 d-flex gap-4 ">
                            <img class="border border-dark rounded" src="img/Leiter_3.1.png" alt="">                
                            <img class="border border-dark rounded" src="img/Leiter_3.1.png" alt="">
                        </div>
                        <p>Gummifüße</p>
                    </div>
                </div>
            </div>
    </div>
    <div class="d-flex gap-5 mt-5">
        <img class="border border-dark rounded ladders-img-2" src="img/Leiter_4.png" alt="">
        <div>
            <div>
                <h5>Stehleitern</h5>
                <ul>
                    <li>Stehleitern dürfen grundsätzlich nur freistehend benutzt werden</li>
                    <li>An beiden Holmseiten ist eine Spreizsicherung durch Spannketten oder Gurte erforderlich</li>
                    <li>Die oberen Enden der Holme müssen so gestaltet sein, dass dazwischen keine Quetchgefahr besteht</li>
                    <li>Leitern immer nur bis zur drittletzten Sprosse betreten</li>
                    <li>Liegt der Standplatz höher als 3,0m, dürfen nur kurzfristige Arbeiten im Greifraum durchgeführt werden</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mt-5 d-flex gap-5 ">
        <img class="border border-dark rounded" src="img/Leiter_5.png" alt="">
        <div>
            <h5>Behelfsgerüste aus Stehleitern</h5>
            <ul>
                <li>Nur für Arbeiten in geringem Umfang</li>
                <li>Den Gerüstbelag höchstens auf die drittobersten Sprossen betreten</li>
                <li>Maximmale Stützweite 3,0m</li>
            </ul>
        </div>
    </div>
    <div class="d-flex justify-content-end mt-5">
      <button id="next-btn" onclick="" type="button" class="btn btn-primary">Weiter</button>
    </div>
    `;
  }