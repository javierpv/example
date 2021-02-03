var objIframe;
var dominioPadre = "*";
var dominioHijo = "*";
var alias = null;
var callbacks = {};

var tiphonejsapi = (function () {

    var enviarOrdenYDefinirCallback = function (orden, variables, callback) {
        // Envío del comando  guardado del callback en el Dominio A
        var identificadorCallback = "" + Date.now() + Math.random();
        callbacks[identificadorCallback] = callback;
        // Aquí enviaría la orden
        objIframe.postMessage(JSON.stringify({
            nombre: orden,
            telefono: variables,
            identificadorCallback: identificadorCallback
        }), "*");
    }

    var enviarOrdenYDefinirCallbackAdminWork = function (orden, variables, callback) {
        // Envío del comando  guardado del callback en el Dominio A
        var identificadorCallback = "" + Date.now() + Math.random();
        callbacks[identificadorCallback] = callback;
        // Aquí enviaría la orden
        objIframe.postMessage(JSON.stringify({
            nombre: orden,
            telefono: variables,
            identificadorCallback: identificadorCallback
        }), "*");
    }

    var enviarOrdenYDefinirCallbackEndCall = function (orden, callback) {
        // Envío del comando  guardado del callback en el Dominio A
        var identificadorCallback = "" + Date.now() + Math.random();
        callbacks[identificadorCallback] = callback;
        // Aquí enviaría la orden
        objIframe.postMessage(JSON.stringify({
            nombre: orden,
            identificadorCallback: identificadorCallback
        }), "*");
    }

    var getAlias = function (callback) {
        var ok = new Object();
        try {
            var alias = localStorage.getItem("AliasOpTiphone");
            if (alias == null)
                ok.error = true;
            else {
                ok.error = false;
                ok.alias = alias;
            }
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var getPositionAndExtension = function (callback) {

        var ok = new Object();
        try {

            var extension = localStorage.getItem("CodExtenTiphone");
            var position = localStorage.getItem("posicion");

            if (position == null || extension == null)
                ok.error = true;
            else {
                ok.error = false;
                ok.position = position;
                ok.extension = extension;
            }
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var getSessionStatus = function (callback) {

        var clave = {
            nombre: "getSessionStatus"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            objIframe.postMessage(json, dominioHijo);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var StopPreviewTimer = function (callback) {

        var clave = {
            nombre: "StopPreviewTimer"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            objIframe.postMessage(json, dominioHijo);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var RecordRequest = function (IdCampana, IdLista, Condicion, Grupo, callback) {
        var clave = {
            nombre: "RecordRequest",
            IdCampana: IdCampana,
            IdLista: IdLista,
            Condicion: Condicion,
            Grupo: Grupo
        };
        var json = JSON.stringify(clave);
        var ok = new Object();

        try {
            objIframe.postMessage(json, dominioHijo);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);


    }

    var RecordRequestResult = function (resultado, callback) {
        var clave = {
            nombre: "RecordRequestResult",
            resultado: resultado
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var PositionAndExtensionResult = function (posicion, extension, callback) {
        var clave = {
            nombre: "PositionAndExtensionResult",
            posicion: posicion,
            extension: extension
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var SessionStatus = function (estado, callback) {
        var clave = {
            nombre: "SessionStatus",
            estado: estado
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var VoiceRecordingFileName = function (nombre, callback) {
        var clave = {
            nombre: "VoiceRecordingFileName",
            nombreGrabacion: nombre
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var VoiceRecordingFileNameAdditional = function (nombre, callback) {
        var clave = {
            nombre: "VoiceRecordingFileNameAdditional",
            nombreGrabacion: nombre
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var StartRecording = function (callback) {
        var clave = {
            nombre: "StartRecording"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            objIframe.postMessage(json, dominioHijo);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var StopRecording = function (callback) {
        var clave = {
            nombre: "StopRecording"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            objIframe.postMessage(json, dominioHijo);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var RecordEnded = function (resultadonegocio, callback) {
        var clave = {
            nombre: "RecordEnded",
            resultadonegocio: resultadonegocio
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            objIframe.postMessage(json, dominioHijo);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var EndCall = function (callback) {
        var clave = {
            nombre: "EndCall"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();

        enviarOrdenYDefinirCallbackEndCall("EndCall", callback);

    }

    var Reconnect = function (callback) {
        var clave = {
            nombre: "Reconnect"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var PreviewRecordRejected = function (callback) {
        var clave = {
            nombre: "PreviewRecordRejected"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var PreviewCallInConference = function (callback) {
        var clave = {
            nombre: "PreviewCallInConference"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var EndRescheduling = function (resultado, callback) {
        var clave = {
            nombre: "EndRescheduling",
            resultado: resultado
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var DialPhone = function (telefono, callback) {
        var clave = {
            nombre: "DialPhone",
            telefono: telefono
        };
        var json = JSON.stringify(clave);
        var ok = new Object();

        enviarOrdenYDefinirCallback("DialPhone", telefono, callback);

    }

    var PaletaConectada = function () {

        var clave = {
            nombre: "PaletaConectada"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);

        } catch (err) {

        }



    }

    var InboundCallData = function (IdLlamada, CodigoGrupo, AliasGrupo, ANI, DNIS, Channel, callback) {
        var clave = {
            nombre: "InboundCallData",
            IdLlamada: IdLlamada,
            CodigoGrupo: CodigoGrupo,
            AliasGrupo: AliasGrupo,
            ANI: ANI,
            DNIS: DNIS,
            Channel: Channel
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            //localStorage.setItem("LlamadaEntranteTiphone",clave);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var OutboundCallId = function (IdLlamada, callback) {
        var clave = {
            nombre: "OutboundCallId",
            IdLlamada: IdLlamada
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            //localStorage.setItem("LlamadaEntranteTiphone",clave);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var DatosAlerting = function (diccionario, grupo, phone, callid, callback) {

        var clave = {
            nombre: "DatosAlerting",
            diccionario: diccionario,
            grupo: grupo,
            phone: phone,
            callid: callid
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var PreviewCallData = function (IdLlamada, campana, lista, operacion, idcliente, nombrecliente, datosregistro, callback) {
        var clave = {
            nombre: "PreviewCallData",
            IdLlamada: IdLlamada,
            campana: campana,
            lista: lista,
            operacion: operacion,
            idcliente: idcliente,
            nombrecliente: nombrecliente,
            datosregistro: datosregistro
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var PredictiveCallData = function (IdLlamada, campana, lista, operacion, idcliente, nombrecliente, telefonomarcado, datosregistro, callback) {
        var clave = {
            nombre: "PredictiveCallData",
            IdLlamada: IdLlamada,
            campana: campana,
            lista: lista,
            operacion: operacion,
            idcliente: idcliente,
            nombrecliente: nombrecliente,
            telefonomarcado: telefonomarcado,
            datosregistro: datosregistro
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var SessionVisibility = function (visible, callback) {
        var clave = {
            nombre: "SessionVisibility",
            visible: visible
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var addEventListener = function (nombreEvento, funcion) {
        document.addEventListener(nombreEvento, funcion, false);
    }

    var inicializar = function (iframe, dominioPadre, dominioIframe, aliasOp, callback) {
        objIframe = iframe;
        dominioHijo = dominioIframe;
        alias = aliasOp;
        dominioPadre = dominioPadre;

        // eventPaletaInicializada.detail.alias = aliasOp;

        // if (alias != null)
        //     document.dispatchEvent(eventPaletaInicializada);
    }

    var paletaCargada = function () {
        var c = {
            nombre: "paletaCargada"
        };
        var j = JSON.stringify(c);

        parent.postMessage(j, "*");
    }

    var ExpandirPaleta = function (callback) {

        var clave = {
            nombre: "ExpandirPaleta"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var ContraerPaleta = function (altura, callback) {

        var clave = {
            nombre: "ContraerPaleta",
            altura: altura
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var ExpandirDial = function (callback) {

        var clave = {
            nombre: "ExpandirDial"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var ExpandirSelector = function (callback) {

        var clave = {
            nombre: "ExpandirSelector"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var ExpandirSegundaLlamada = function (altura, callback) {

        var clave = {
            nombre: "ExpandirSegundaLlamada",
            height: altura
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var PaletaAlturaMinima = function (altura, callback) {

        var clave = {
            nombre: "PaletaAlturaMinima",
            altura: altura
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var NoTypify = function (callback) {
        var clave = {
            nombre: "NoTypify"
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            objIframe.postMessage(json, dominioHijo);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);

    }

    var InfoMessage = function (message, callback) {
        var clave = {
            nombre: "InfoMessage",
            message: message
        };
        var json = JSON.stringify(clave);
        var ok = new Object();
        try {
            parent.postMessage(json, dominioPadre);
            ok.error = false;
        } catch (err) {
            ok.error = true;
        }

        if (callback != undefined)
            callback(ok);
    }

    var AdminWork = function (telefono, callback) {
        var clave = {
            nombre: "AdminWork",
            telefono: telefono
        };
        var json = JSON.stringify(clave);
        var ok = new Object();

        enviarOrdenYDefinirCallbackAdminWork("AdminWork", telefono, callback);
    }

    return {
        getAlias: getAlias,
        getPositionAndExtension: getPositionAndExtension,
        getSessionStatus: getSessionStatus,
        StopPreviewTimer: StopPreviewTimer,
        RecordRequest: RecordRequest,
        RecordRequestResult: RecordRequestResult,
        PositionAndExtensionResult: PositionAndExtensionResult,
        SessionStatus: SessionStatus,
        VoiceRecordingFileName: VoiceRecordingFileName,
        VoiceRecordingFileNameAdditional: VoiceRecordingFileNameAdditional,
        RecordEnded: RecordEnded,
        Reconnect: Reconnect,
        PreviewRecordRejected: PreviewRecordRejected,
        PreviewCallInConference: PreviewCallInConference,
        EndRescheduling: EndRescheduling,
        DialPhone: DialPhone,
        InboundCallData: InboundCallData,
        PreviewCallData: PreviewCallData,
        PredictiveCallData: PredictiveCallData,
        SessionVisibility: SessionVisibility,
        addEventListener: addEventListener,
        inicializar: inicializar,
        paletaCargada: paletaCargada,
        ExpandirPaleta: ExpandirPaleta,
        ContraerPaleta: ContraerPaleta,
        ExpandirDial: ExpandirDial,
        ExpandirSelector: ExpandirSelector,
        ExpandirSegundaLlamada: ExpandirSegundaLlamada,
        PaletaAlturaMinima: PaletaAlturaMinima,
        NoTypify: NoTypify,
        InfoMessage: InfoMessage,
        AdminWork: AdminWork,
        DatosAlerting: DatosAlerting,
        EndCall: EndCall,
        PaletaConectada: PaletaConectada,
        OutboundCallId: OutboundCallId,
    }

})();

function receiveMessage(e) {
    var nuevoValor = JSON.parse(e.data);

    switch (nuevoValor.nombre) {
        // Mensaje que se recibirá en el Dominio A, que es el que guardó la callback y la puede ejecutar.
        case "callback":
            // Recibida la respuesta a alguna orden enviada
            // Indentificamos la callback asociada, la ejecutamos y la eliminamos

            if (nuevoValor.identificadorCallback) {
                var funcionCallback = callbacks[nuevoValor.identificadorCallback];
                funcionCallback(nuevoValor);
                delete callbacks[nuevoValor.identificadorCallback];
            }
            break;

        case "paletaCargada":
            var mensaje = {
                nombre: "inicializar",
                dominioPadre: dominioPadre,
                alias: alias
            };
            var json = JSON.stringify(mensaje);
            objIframe = e.source;
            objIframe.postMessage(json, dominioHijo);
            break;
        case "inicializar":
            alias = nuevoValor.alias;
            dominioPadre = nuevoValor.dominioPadre;
            eventPaletaInicializada.detail.alias = alias;

            if (alias != null)
                document.dispatchEvent(eventPaletaInicializada);

            break;
        case "PaletaConectada":
            document.dispatchEvent(eventPaletaConectada);
            break;
        case "InboundCallData":

            eventLlamadaEntranteTiphone.detail.IdCall = nuevoValor.IdLlamada;
            eventLlamadaEntranteTiphone.detail.CodeGroup = nuevoValor.CodigoGrupo;
            eventLlamadaEntranteTiphone.detail.AliasGroup = nuevoValor.AliasGrupo;
            eventLlamadaEntranteTiphone.detail.ANI = nuevoValor.ANI;
            eventLlamadaEntranteTiphone.detail.DNIS = nuevoValor.DNIS;
            eventLlamadaEntranteTiphone.detail.Channel = nuevoValor.Channel;

            document.dispatchEvent(eventLlamadaEntranteTiphone);
            break;

        case "OutboundCallId":

            eventLlamadaSalienteTiphone.detail.IdCall = nuevoValor.IdLlamada;

            document.dispatchEvent(eventLlamadaSalienteTiphone);
            break;

        case "RecordRequest":

            eventSolicitarRegistroTiphone.detail.IdCampana = nuevoValor.IdCampana;
            eventSolicitarRegistroTiphone.detail.IdLista = nuevoValor.IdLista;
            eventSolicitarRegistroTiphone.detail.Condicion = nuevoValor.Condicion;
            eventSolicitarRegistroTiphone.detail.Grupo = nuevoValor.Grupo;

            document.dispatchEvent(eventSolicitarRegistroTiphone);

            break;

        case "getSessionStatus":

            document.dispatchEvent(eventgetEstadoPaleta);
            break;

        case "RecordRequestResult":

            eventSolicitarRegistroResultTiphone.detail.result = nuevoValor.resultado;

            document.dispatchEvent(eventSolicitarRegistroResultTiphone);
            break;

        case "PositionAndExtensionResult":

            eventPosicionYExtensionResult.detail.position = nuevoValor.posicion;
            eventPosicionYExtensionResult.detail.extension = nuevoValor.extension;

            document.dispatchEvent(eventPosicionYExtensionResult);

            break;

        case "VoiceRecordingFileName":

            eventNombreGrabacion.detail.fileName = nuevoValor.nombreGrabacion;

            document.dispatchEvent(eventNombreGrabacion);
            break;

        case "VoiceRecordingFileNameAdditional":

            eventNombreGrabacionAdditional.detail.fileName = nuevoValor.nombreGrabacion;

            document.dispatchEvent(eventNombreGrabacionAdditional);
            break;

        case "SessionStatus":

            eventEstadoPaleta.detail.status = nuevoValor.estado;

            document.dispatchEvent(eventEstadoPaleta);
            break;

        case "StartRecording":
            document.dispatchEvent(eventIniciarGrabacion);
            break;

        case "StopRecording":
            document.dispatchEvent(eventDetenerGrabacion);
            break;

        case "EndRescheduling":

            eventFinalizarReproTiphone.detail.result = nuevoValor.resultado;

            document.dispatchEvent(eventFinalizarReproTiphone);

            break;

        case "RecordEnded":

            eventFinalizarRegistroTiphone.detail.resultadonegocio = nuevoValor.resultadonegocio;

            document.dispatchEvent(eventFinalizarRegistroTiphone);
            break;
        case "EndCall":

            if (paleta.state == 'hablando' && paleta.$.mainMenu.text == 'Hablando' && paleta.$.mainMenu.$.button2.icon == "receipt") {
                document.dispatchEvent(eventEndCallTiphone);
            } else {
                var clave = {
                    nombre: "callback",
                    error: true,
                    mensaje: "No se puede realizar el cuelgue de la llamada.",
                    identificadorCallback: nuevoValor.identificadorCallback
                };
                var json = JSON.stringify(clave);
                parent.postMessage(json, dominioPadre);
            }

            break;
        case "DialPhone":

            eventMarcarTelefonoTiphone.detail.telefono = nuevoValor.telefono;

            if (objPaleta.usergeneralstatus == 1) {
                var clave = {
                    nombre: "callback",
                    error: true,
                    mensaje: "No puedes realizar una llamada desde disponible.",
                    identificadorCallback: nuevoValor.identificadorCallback
                };
                var json = JSON.stringify(clave);
                parent.postMessage(json, dominioPadre);
            } else
                document.dispatchEvent(eventMarcarTelefonoTiphone);
            break;
        case "DatosAlerting":

            eventDatosAlerting.detail.Diccionario = nuevoValor.diccionario;
            eventDatosAlerting.detail.Grupo = nuevoValor.grupo;
            eventDatosAlerting.detail.Phone = nuevoValor.phone;
            eventDatosAlerting.detail.CallId = nuevoValor.callid;

            document.dispatchEvent(eventDatosAlerting);
            break;
        case "PreviewCallData":

            eventRegistroPreviewTiphone.detail.IdCall = nuevoValor.IdLlamada;
            eventRegistroPreviewTiphone.detail.IdCampaign = nuevoValor.campana;
            eventRegistroPreviewTiphone.detail.IdList = nuevoValor.lista;
            eventRegistroPreviewTiphone.detail.Operation = nuevoValor.operacion;
            eventRegistroPreviewTiphone.detail.IdClient = nuevoValor.idcliente;
            eventRegistroPreviewTiphone.detail.NameClient = nuevoValor.nombrecliente;
            eventRegistroPreviewTiphone.detail.DatosRegistro = nuevoValor.datosregistro;

            document.dispatchEvent(eventRegistroPreviewTiphone);
            break;
        case "PredictiveCallData":

            eventRegistroPredictivoTiphone.detail.IdCall = nuevoValor.IdLlamada;
            eventRegistroPredictivoTiphone.detail.IdCampaign = nuevoValor.campana;
            eventRegistroPredictivoTiphone.detail.IdList = nuevoValor.lista;
            eventRegistroPredictivoTiphone.detail.Operation = nuevoValor.operacion;
            eventRegistroPredictivoTiphone.detail.IdClient = nuevoValor.idcliente;
            eventRegistroPredictivoTiphone.detail.NameClient = nuevoValor.nombrecliente;
            eventRegistroPredictivoTiphone.detail.Phone = nuevoValor.telefonomarcado;
            eventRegistroPredictivoTiphone.detail.DatosRegistro = nuevoValor.datosregistro;

            document.dispatchEvent(eventRegistroPredictivoTiphone);
            break;
        case "SessionVisibility":
            eventPaletaVisibleTiphone.detail.visible = nuevoValor.visible;
            document.dispatchEvent(eventPaletaVisibleTiphone);
            break;
        case "PreviewRecordRejected":
            document.dispatchEvent(eventPreviewRecordRejected);
            break;
        case "PreviewCallInConference":
            document.dispatchEvent(eventPreviewCallInConference);
            break;
        case "Reconnect":
            document.dispatchEvent(eventReconectarPaleta);
            break;
        case "StopPreviewTimer":
            document.dispatchEvent(eventPararPreview);
            break;
        case "ExpandirPaleta":
            document.dispatchEvent(eventExpandirPaleta);
            break;
        case "ContraerPaleta":
            eventContraerPaleta.detail.height = nuevoValor.altura;

            document.dispatchEvent(eventContraerPaleta);
            break;
        case "ExpandirDial":
            document.dispatchEvent(eventExpandirDial);
            break;
        case "ExpandirSelector":
            document.dispatchEvent(eventExpandirSelector);
            break;
        case "ExpandirSegundaLlamada":
            eventExpandirSegundaLlamada.detail.height = nuevoValor.height;
            document.dispatchEvent(eventExpandirSegundaLlamada);
            break;
        case "PaletaAlturaMinima":
            eventPaletaAlturaMinima.detail.height = nuevoValor.altura;

            document.dispatchEvent(eventPaletaAlturaMinima);
            break;
        case "NoTypify":
            document.dispatchEvent(eventNoPermitirTipificacion);
            break;
        case "InfoMessage":
            eventInfoMessages.detail.message = nuevoValor.message;
            document.dispatchEvent(eventInfoMessages);
            break;
        case "AdminWork":
            eventAdminWork.detail.telefono = nuevoValor.telefono;

            if (paleta.state == 'disponible' || (paleta.state == 'no-disponible' && paleta.$.mainMenu.text == 'No Disponible')) {
                document.dispatchEvent(eventAdminWork);
            } else {
                var clave = {
                    nombre: "callback",
                    error: true,
                    mensaje: "Pase a no disponible o a disponible para realizar una llamada",
                    identificadorCallback: nuevoValor.identificadorCallback
                };
                var json = JSON.stringify(clave);
                parent.postMessage(json, dominioPadre);
            }

            break;
    }



}

// Create the event.
var eventgetEstadoPaleta = new CustomEvent('onGetSessionStatus');
var eventPreviewRecordRejected = new CustomEvent('onPreviewRecordRejected');
var eventPreviewCallInConference = new CustomEvent('onPreviewCallInConference');
var eventPaletaAlturaMinima = new CustomEvent('onPluginHeight', {
    detail: {
        height: ""
    }
});
var eventEstadoPaleta = new CustomEvent('onSessionStatus', {
    detail: {
        status: ""
    }
});
var eventSolicitarRegistroTiphone = new CustomEvent('onRecordRequest', {
    detail: {
        IdCampana: "",
        IdLista: "",
        Condicion: "",
        Grupo: ""
    }
});
var eventEndCallTiphone = new CustomEvent('onEndCall', {
    detail: {

    }
});
var eventFinalizarRegistroTiphone = new CustomEvent('onEndRecord', {
    detail: {
        resultadonegocio: ""
    }
});
var eventMarcarTelefonoTiphone = new CustomEvent('onDialPhone', {
    detail: {
        telefono: ""
    }
});
var eventLlamadaEntranteTiphone = new CustomEvent('onInboundCallData', {
    detail: {
        IdCall: "",
        CodeGroup: "",
        AliasGroup: "",
        ANI: "",
        DNIS: "",
        Channel: ""
    }
});
var eventLlamadaSalienteTiphone = new CustomEvent('onOutboundCallId', {
    detail: {
        IdCall: ""
    }
});
var eventPaletaConectada = new CustomEvent('onPaletaConectada', {});
var eventDatosAlerting = new CustomEvent('onDatosAlerting', {
    detail: {
        Diccionario: "",
        Grupo: "",
        Phone: "",
        CallId: ""
    }
});
var eventRegistroPreviewTiphone = new CustomEvent('onPreviewCallData', {
    detail: {
        IdCall: "",
        IdCampaign: "",
        IdList: "",
        Operation: "",
        IdClient: "",
        NameClient: "",
        DatosRegistro: ""
    }
});
var eventRegistroPredictivoTiphone = new CustomEvent('onPredictiveCallData', {
    detail: {
        IdCall: "",
        IdCampaign: "",
        IdList: "",
        Operation: "",
        IdClient: "",
        NameClient: "",
        Phone: "",
        DatosRegistro: ""
    }
});
var eventPaletaVisibleTiphone = new CustomEvent('onPluginVisibility', {
    detail: {
        visible: ""
    }
});
var eventSolicitarRegistroResultTiphone = new CustomEvent('onRecordRequestResult', {
    detail: {
        result: ""
    }
});
var eventPaletaInicializada = new CustomEvent('onPaletaInicializada', {
    detail: {
        alias: "",
        resultado: ""
    }
});
var eventFinalizarReproTiphone = new CustomEvent('onReschedulingEnded', {
    detail: {
        result: ""
    }
});
var eventReconectarPaleta = new CustomEvent('onReconnect');
var eventNombreGrabacion = new CustomEvent('onVoiceRecordingFileName', {
    detail: {
        fileName: ""
    }
});
var eventNombreGrabacionAdditional = new CustomEvent('onVoiceRecordingFileNameAdditional', {
    detail: {
        fileName: ""
    }
});
var eventIniciarGrabacion = new CustomEvent('onStartRecording');
var eventDetenerGrabacion = new CustomEvent('onStopRecording');
var eventPosicionYExtensionResult = new CustomEvent('onPositionAndExtension', {
    detail: {
        position: "",
        extension: ""
    }
});
var eventPararPreview = new CustomEvent('onStopPreviewTimer');
var eventExpandirPaleta = new CustomEvent('onExpandPlugin');
var eventContraerPaleta = new CustomEvent('onCollapsePlugin', {
    detail: {
        height: ""
    }
});
var eventExpandirDial = new CustomEvent('onExpandDial');
var eventExpandirSelector = new CustomEvent('onExpandSelector');
var eventExpandirSegundaLlamada = new CustomEvent('onExpandAdditionalCall', {
    detail: {
        height: ""
    }
});
var eventNoPermitirTipificacion = new CustomEvent('onNoTypify');
var eventInfoMessages = new CustomEvent('onInfoMessages', {
    detail: {
        message: ""
    }
});
var eventAdminWork = new CustomEvent('onAdminWork', {
    detail: {
        telefono: ""
    }
});

window.addEventListener("message", receiveMessage, false);
