function aggiungiDati(){
    //recuperare i dati
    var stanza = document.getElementById("roomType").value;
    var persone = document.getElementById("quantepersone").value;
    var checkin = new Date(document.getElementById("datein").value);
    var giorno = checkin.getDate();
    var mese = checkin.getDate();
    var anno = checkin.getDate();
    var arrivo = giorno + "/" + mese + "/" + anno;
    var checkout = new Date(document.getElementById("dateout").value);
    var giorno2 = checkout.getDate();
    var mese2 = checkout.getDate();
    var anno2 = checkout.getDate();
    var partenza = giorno2 + "/" + mese2 + "/" + anno2;
    var note = document.getElementById("note").value;

    //creare riga
    var riga = document.createElement("tr");
    //creare le colonne
    var colStanza = document.createElement("td");
    var colPersone = document.createElement("td");
    var colArrivo = document.createElement("td");
    var colPartenza = document.createElement("td");
    var colNote = document.createElement("td");

    //assegnare i valori alle righe che si creano
    colStanza.innerText = stanza;
    colPersone.innerText = persone;
    colArrivo.innerText = arrivo;
    colPartenza.innerText = partenza;
    colNote.innerText = note;

    //aggiungere celle alla riga
    riga.appendChild(colStanza);
    riga.appendChild(colPersone);
    riga.appendChild(colArrivo);
    riga.appendChild(colPartenza);
    riga.appendChild(colNote);

    //aggiungere riga alla tabella
    var tabella = document.getElementById("tabella");
    tabella.appendChild(riga);

    //resettare campi
    document.getElementById("note").value = "";
    document.getElementById("roomType").value = "tokyo";
    document.getElementById("quantepersone").value = "p1";




}