
function pdf() {
    let doc = new jsPDF();
    let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    let pageWidthHalf = pageWidth / 2
    const date = new Date();
    let dateText = date.toLocaleDateString();
    
    let str = "Teilnahmezertifikat";
    doc.setTextColor(0);
    doc.setFontSize(42);
    doc.text(str, pageWidthHalf, 40, {align: 'center'});

    let str2 = capitalizeWords()
    doc.setFontSize(24)
    doc.text(str2, pageWidthHalf, 65, {align: 'center'})

    doc.setDrawColor(0, 0, 255);
    doc.setLineWidth(1);
    doc.line(20, 70, 190, 70);

    doc.setFontSize(16)
    let str3 = "Losberger Deboer"
    doc.text(str3, pageWidthHalf, 80, {align: 'center'})

    doc.setFontSize(12)
    let str4 = `hat am ${dateText} die Jährliche`
    doc.text(str4, pageWidthHalf, 110, {align: 'center'})

    doc.setFontSize(30)
    let str5 = "Arbeitsschutz Unterweisung"
    doc.text(str5, pageWidthHalf, 125, {align: 'center'})

    checkSucces(doc, pageWidthHalf);
   
    
let text = [
    `Flurförderfahrzeuge `,
    `Hebebühne `,
    `Arbeitsicherheit `,
    'PSA',
    'Leitern'
];
let  y = 150;
let x =pageWidthHalf - 40
text.forEach(function(item) {
    doc.setTextColor(0, 0, 255)
    doc.text(x, y, '\u2022')
    doc.setTextColor(0)
    doc.text(x + 5, y, item);
    y += 7.5;
});

let answer = [
    `(${rightAnswersComplete['forklift']}/14)`,
    `(${rightAnswersComplete['liftingplatform']}/11)`,
    `(${rightAnswersComplete['occupationalsafety']}/7)`
]
y = 150
answer.forEach(function(item) {
    doc.text(x + 60, y, item)
    y += 7.5
})



    doc.save(`${capitalizeWords() + "-" + dateText}.pdf`);
}

function checkSucces(doc, pageWidthHalf){
    if ( !(rightAnswersComplete['forklift'] >= 8) || !(rightAnswersComplete['occupationalsafety'] >= 4) || !(rightAnswersComplete['liftingplatform'] >= 6)){
        doc.setFontSize(12)
        let str6 = "mit folgenden Themen durchlaufen aber nicht bestanden:"
        doc.text(str6,pageWidthHalf, 140, {align: 'center'})
    }else{
        doc.setFontSize(12)
        let str6 = "mit folgenden Themen erfolgreich durchlaufen und bestanden:"
        doc.text(str6,pageWidthHalf, 140, {align: 'center'})
    }
}
