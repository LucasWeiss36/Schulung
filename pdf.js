function pdf() {
    var doc = new jsPDF();
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    
    
    // FOOTER
    let str = "Your footer text";
    doc.setTextColor(0);
    doc.setFontSize(10);
    doc.text(str, pageWidth / 2, pageHeight / 2, {align: 'center'});
    doc.save("example.pdf");
}
