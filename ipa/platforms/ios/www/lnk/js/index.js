function isPhone(){return null==_isPhone&&(_isPhone=0!==document.URL.indexOf("http://")&&0!==document.URL.indexOf("https://")),_isPhone}function creaObjProp(t,a){var e;if(t.indexOf(":")>-1){var o=t.split(":");t=o[0],e=o[1]}var i=document.createElement(t);return e&&(i.type=e),modObjProp(i,a),i}function modObjProp(t,a){for(var e in a){var o=a[e];if(null!=o)try{if("omiteNulo"==e)continue;if("textos"==e)for(var i=o.split("\\n"),s=0;s<i.length;s++){var r=i[s];if(r.indexOf("\\t")>-1)for(var n=r.split("\\t"),c=0;c<n.length;c++)t.appendChild(document.createTextNode(" ")),t.appendChild(document.createTextNode(n[c]));else t.appendChild(document.createTextNode(r));s<i.length-1&&t.appendChild(creaObjProp("BR"))}else if("texto"==e)t.appendChild(document.createTextNode(o));else if("circle"==e){var p=document.createElement("i");p.className=o,t.firstChild?t.insertBefore(p,t.firstChild):t.appendChild(p)}else if("i"==e){var p=document.createElement("i");p.className=o,t.firstChild?t.insertBefore(p,t.firstChild):t.appendChild(p)}else if("mi"==e){var p=document.createElement("i");p.className="zmdi zmdi-"+o,t.appendChild(p)}else if("mi_circle"==e){var p=document.createElement("i");p.className="zmdi zmdi-"+o;var l=document.createElement("i");l.className="material-icons circle",l.appendChild(p),t.appendChild(l)}else if("hijos"==e)for(var s=0;s<o.length;s++){var r=o[s];t.appendChild(r)}else"hijo"==e?t.appendChild(o):0==e.indexOf("style.")?(e=e.substring(6),["left","top","width","height"].indexOf(e)>-1&&(o=o.toString(),-1==o.indexOf("px")&&-1==o.indexOf("%")&&(o+="px")),t.style[e]=o):0==e.indexOf("attr.")?(e=e.substring(5),t.setAttribute(e,o)):0==e.indexOf("data-")?t.setAttribute(e,o):"html"==e?t.innerHTML=o:t[e]=o}catch(t){}}}function creaT(t){return document.createTextNode(t)}function buscaFilas(t,a){if(null==t)return[];var e=function(t,e){for(var o in a)if(0==o.indexOf("_contains_")){var i=o.substr("_contains_".length),s=t[i];if(-1==s.toLowerCase().indexOf((a[o]+"").toLowerCase()))return!1}else if(a[o]!=t[o])return!1;return!0};return jQuery.grep(t,e)}function getIndiceFila(t,a,e){if(null==t)return-1;var o=0;t.map(function(t){t._idx=o,o++});var t=buscaFilas(t,a);if(0==t.length)return-1;if(null!=e&&1==e){for(var i=[],s=0;s<t.length;s++)i.push(t[s]._idx);return i}return t[0]._idx}function get(t){return JSON.parse(localStorage.getItem(t))}function save(t,a){try{localStorage.setItem(t,JSON.stringify(a))}catch(t){t instanceof QuotaExceededError&&app.trackEvent("Error","QuotaExceededError")}}function Application(){this.vistaActiva=null,this.state={data:data,notas:get("notas")||{},favoritos:get("favoritos")||[]}}function Vista(){if(this.domMenu=jQuery("#navigation_bar .btn-search"),null!=this.id){var t=this.id.slice(0,1).toLowerCase()+this.id.slice(1);app[t]=this,this.loaded=!1}}function VistaHome(){this.id="VistaHome",Vista.call(this)}function VistaIndice(t){this.id="VistaIndice",this.title="ÍNDICE DE CAPÍTULOS",Vista.call(this)}function VistaCapitulo(t,a,e){this.id="VistaCapitulo",Vista.call(this),this.cap=t,this.apartado=a,this.searchString=e,this.domTitle=null,this.domSubTitle=null}function VistaAutores(t){this.id="VistaAutores",this.cap=t,this.title="Autores",Vista.call(this)}function VistaPDF(t){this.id="VistaPDF",Vista.call(this),this.cap=t}function VistaPresentacion(){Vista.call(this),this.id="VistaPresentacion",this.title="Presentación",this.url="data/presentacion/presentacion.html"}function VistaPromueven(){this.id="VistaPromueven",this.title="Promueven",Vista.call(this)}function VistaBuscar(){this.id="VistaBuscar";var t=jQuery(".modal#buscar");this.ul=t.find("ul"),this.txt=t.find("input"),this.form=M.Modal.init(t[0],{dismissible:!1}),Vista.call(this)}function VistaLegal(){this.id="VistaLegal",this.title="Legal",this.url="data/legal/legal.html",Vista.call(this)}function VistaNotas(){this.id="VistaNotas",this.title="Notas",Vista.call(this)}var _isPhone,formato={};formato.numRomano=function(t){var a="";return 1==t?a="I":2==t?a="II":3==t?a="III":4==t?a="IV":5==t?a="V":6==t?a="VI":7==t?a="VII":8==t?a="VIII":9==t?a="IX":10==t&&(a="X"),a+". "},Application.prototype.onDeviceReady=function(){this.receivedEvent("deviceready")},Application.prototype.initialize=function(){var t=device.platform.toLowerCase();jQuery("body").addClass(t).addClass(t+device.version.split(".")[0]);var a=(document.location.hash+"").substring(1);if(""==a)VistaPresentacion.prototype.shouldShowAtStarUp()?Vista.prototype.newVistaPresentacion():Vista.prototype.newVistaHome();else if("VistaHome"==a)Vista.prototype.newVistaHome();else if("VistaIndice"==a)Vista.prototype.newVistaIndice();else if(a.startsWith("VistaFavoritos"))Vista.prototype.newVistaFavoritos();else if(a.startsWith("VistaCapitulo")){var e=a.split("/")[1],o=e.split("-"),i=Vista.prototype.getCapituloForID(o[0]);Vista.prototype.newVistaCapitulo(i,o[1])}else"VistaAutores"==a?Vista.prototype.newVistaAutores():"VistaPDF"==a?Vista.prototype.newVistaPDF():"VistaPresentacion"==a?Vista.prototype.newVistaPresentacion():"VistaPromueven"==a?Vista.prototype.newVistaPromueven():"VistaLegal"==a?Vista.prototype.newVistaLegal():"VistaNotas"==a&&Vista.prototype.newVistaNotas();jQuery(".sidenav-trigger").click(function(){Vista.prototype.newVistaHome()}),app.state.favoritos=get("favoritos")||[],jQuery(".modal").modal()},Application.prototype.receivedEvent=function(t){app.initialize()},Application.prototype.backButton=function(){this.vistaActiva&&this.vistaActiva.backButton()},Application.prototype.trackView=function(){},Application.prototype.trackEvent=function(){},Application.prototype.showThrobber=function(){},Application.prototype.removeThrobber=function(){},Application.prototype.search=function(){Vista.prototype.newVistaBuscar()};var app=new Application;if(isPhone())document.addEventListener("deviceready",function(){app.onDeviceReady()},!1);else{var self=this;$(document).ready(function(){app.onDeviceReady()})}Vista.prototype.tipos=["VistaHome","VistaIndice","VistaCapitulo","VistaFavoritos","VistaNotas","VistaAutores","VistaPDF","VistaPresentacion","VistaPromueven","VistaLegal"],Vista.prototype.toDOM=function(t){window.history.pushState({vista:this.id},this.id,"#"+this.id),app.trackView(this.id),app.showThrobber(),jQuery(".brand-logo").text(this.title);var a=jQuery("#content");app&&(app.vistaActiva=this),a.find(".vista").hide();var e=this.tipos.join(" ");jQuery("body").removeClass(e).addClass(this.id);var o;if(this.loaded)a.find(".vista."+this.id).show();else{var o=this.getBody();o instanceof Array?this.domBody=jQuery(o[0]):this.domBody=jQuery(o),this.domCont=jQuery(creaObjProp("section",{"style.height":"100%"})),this.dom=a,a.append(this.domCont),this.domCont.append(o),this.tareasPostCarga()}this.domCont.removeClass(e).addClass("vista "+this.id),this.resize(),this.loaded=!0},Vista.prototype.tareasPostCarga=function(){},Vista.prototype.resize=function(){},Vista.prototype.backButton=function(){},Vista.prototype.getBody=function(){},Vista.prototype.concatAutores=function(t,a){for(var e="",o=0;o<t.length;o++){var i=t[o];e+=buscaFilas(app.state.data.autores,{cd:i})[0][a],o==t.length-1||(o==t.length-2?e+=" y ":e+=", ")}return e},Vista.prototype.showMyNotes=function(){var t=app.state.notas[this.cap.cd];jQuery(".modal#myNotes #texto").val(t),jQuery(".modal#myNotes label").toggleClass("active",null!=t&&""!=t),jQuery(".modal#myNotes").modal("open")},Vista.prototype.saveNotes=function(){jQuery(".modal#myNotes").modal("close");var t=jQuery(".modal#myNotes #texto").val();null!=t&&(app.state.notas[this.cap.cd]=t,save("notas",app.state.notas)),app.vistaActiva==app.vistaNotas&&app.vistaNotas.refresh()},Vista.prototype.createAdmon=function(t,a){return creaObjProp("div",{className:"admonition "+t,hijos:[creaObjProp("div",{className:"row img"}),creaObjProp("div",{className:"row txt",hijos:[creaT(a)]})]})},Vista.prototype.getCapituloForID=function(t){return buscaFilas(app.state.data.capitulos,{cd:t})[0]},Vista.prototype.scrollTop=function(){jQuery("html, body").animate({scrollTop:top},0)},Vista.prototype.newVistaIndice=function(){if(app.vistaIndice)app.vistaIndice.toDOM();else{(new VistaIndice).toDOM()}app.vistaIndice.toggleShowAll(!0)},Vista.prototype.newVistaFavoritos=function(){if(app.vistaIndice)app.vistaIndice.toDOM();else{(new VistaIndice).toDOM()}app.vistaIndice.toggleShowAll(!1)},Vista.prototype.newVistaHome=function(){if(app.vistaHome)app.vistaHome.toDOM();else{(new VistaHome).toDOM()}},Vista.prototype.newVistaAutores=function(t){if(t instanceof Event&&(t=null),app.vistaAutores)app.vistaAutores.setCapitulo(t),app.vistaAutores.toDOM(),app.vistaAutores.scrollTop();else{new VistaAutores(t).toDOM()}},Vista.prototype.newVistaCapitulo=function(t,a,e){if(app.vistaCapitulo)app.vistaCapitulo.toDOM(),app.vistaCapitulo.setCapitulo(t,a,e);else{new VistaCapitulo(t,a,e).toDOM()}},Vista.prototype.newVistaPDF=function(t){if(app.vistaPDF)app.vistaPDF.setCapitulo(t);else{new VistaPDF(t).toDOM()}},Vista.prototype.newVistaPresentacion=function(){if(app.vistaPresentacion)app.vistaPresentacion.toDOM();else{(new VistaPresentacion).toDOM()}},Vista.prototype.newVistaPromueven=function(){if(app.vistaPromueven)app.vistaPromueven.toDOM();else{(new VistaPromueven).toDOM()}},Vista.prototype.newVistaBuscar=function(){if(app.vistaBuscar)app.vistaBuscar.toDOM();else{(new VistaBuscar).toDOM()}},Vista.prototype.newVistaLegal=function(){if(app.vistaLegal)app.vistaLegal.toDOM();else{(new VistaLegal).toDOM()}},Vista.prototype.newVistaCompartir=function(){window.plugins.socialsharing.share("App Hemostasia y Trombosis, descarga gratuita\n\n  https://bit.ly/hemostrombo")},Vista.prototype.newvistaValorar=function(){AppRate.preferences={useLanguage:"es-ES",storeAppURL:{ios:"XX",android:"market://details?id=com.imaidea.aranediciones.hemostrombo"},simpleMode:!0,openStoreInApp:!1,callbacks:{onButtonClicked:function(t){"yes"==q[t]&&"iOS"==device.platform&&cordova.plugins.market.open("tms-apps://itunes.apple.com/app/viewContentsUserReviews/id686440022?mt=8")}},customLocale:{title:"¿Quieres valorar esta App?",message:"Solo te llevará unos segundos.",cancelButtonLabel:"No, gracias",laterButtonLabel:"Más tarde",rateButtonLabel:"Sí"}},AppRate.preferences.callbacks.onRateDialogShow=function(t){t(1)},AppRate.promptForRating(!0)},Vista.prototype.newVistaNotas=function(){if(app.vistaNotas)app.vistaNotas.toDOM(),app.vistaNotas.refresh();else{(new VistaNotas).toDOM()}},VistaHome.prototype=new Vista,VistaHome.prototype.resize=function(){},VistaHome.prototype.getBody=function(){return[creaObjProp("div",{className:"vista-header"}),creaObjProp("div",{className:"vista-body flexcontainer grid",hijos:[this.createHomeMenu("","Presentación",this.newVistaPresentacion,"presentacion"),this.createHomeMenu("","Índice",this.newVistaIndice,"indice"),this.createHomeMenu("","Autores",this.newVistaAutores,"autores"),this.createHomeMenu("","Favoritos",this.newVistaFavoritos,"favoritos"),this.createHomeMenu("","Buscar",this.newVistaBuscar,"buscar"),this.createHomeMenu("","Notas",this.newVistaNotas,"notas"),this.createHomeMenu("","Promueven",this.newVistaPromueven,"promueven")]}),creaObjProp("div",{className:"vista-bottom navbar-fixed",hijos:[creaObjProp("nav",{className:"nav-wrapper",hijos:[creaObjProp("ul",{className:"right",hijos:[this.createBottomBarMenu("info-outline icon-btn-legal",this.newVistaLegal),this.createBottomBarMenu("comment icon-btn-comentar",this.newvistaValorar),this.createBottomBarMenu("share icon-btn-compartir",this.newVistaCompartir)]})]})]})]},VistaHome.prototype.createHomeMenu=function(t,a,e,o){return creaObjProp("div",{onclick:e,mi:t,className:"home-menu"+(o?" "+o:""),hijos:[]})},VistaHome.prototype.createBottomBarMenu=function(t,a){return creaObjProp("li",{className:"bottom-menu",onclick:a,hijos:[creaObjProp("a",{mi:t})]})},VistaIndice.prototype=new Vista,VistaIndice.prototype.resize=function(){},VistaIndice.prototype.getBody=function(){var t=[];for(var a in app.state.data.secciones){var e=app.state.data.secciones[a];t.push(this.creaDomSeccion(a,e))}return[creaObjProp("div",{className:"vista-body",hijos:[creaObjProp("ul",{className:"secciones collection",hijos:t})]})]},VistaIndice.prototype.tareasPostCarga=function(){for(var t in app.state.data.secciones){var a=app.state.data.secciones[t],e=this.domBody.find(".seccion[data-cd="+a.cd+"] > .capitulos");for(var o in a.capitulos){var i=a.capitulos[o],s=this.getCapituloForID(i);e.append(this.creaDomCapitulo(i,s))}}},VistaIndice.prototype.clickSeccion=function(t,a){t.stopPropagation(),jQuery(a).closest(".collection-item.seccion").toggleClass("collapsed")},VistaIndice.prototype.clickCapitulo=function(t,a){t.stopPropagation();var e=this.getCapituloForDom(a);this.newVistaCapitulo(e)},VistaIndice.prototype.clickApartado=function(t,a){t.stopPropagation();var e=this.getCapituloForDom(a),o=this.getApartadoForDom(a);this.newVistaCapitulo(e,o.cd-1)},VistaIndice.prototype.clickExpandButton=function(t,a){t.stopPropagation(),jQuery(a).closest(".collection-item.capitulo").toggleClass("collapsed")},VistaIndice.prototype.clickStarButton=function(t,a){t.stopPropagation();var e=jQuery(a),o=e.closest(".collection-item.capitulo");o.toggleClass("starred");var i=e.closest(".collection-item.apartado");i.toggleClass("starred");var s=o.data("cd"),r=i.data("cd"),n=s+"/"+(r-1);if(i.hasClass("starred"))app.state.favoritos.push(n);else{var c=app.state.favoritos.indexOf(n);c>-1&&app.state.favoritos.splice(c,1)}save("favoritos",app.state.favoritos)},VistaIndice.prototype.getCapituloForDom=function(t){var a=jQuery(t),e=a.closest(".collection-item.capitulo").data("cd");return this.getCapituloForID(e)},VistaIndice.prototype.getApartadoForDom=function(t){var a=jQuery(t),e=a.closest(".collection-item.capitulo").data("cd"),o=a.closest(".collection-item.apartado").data("cd");return this.getCapituloForID(e).apartados[o-1]},VistaIndice.prototype.creaDomSeccion=function(t,a){var e=this;return creaObjProp("li",{"data-cd":a.cd,className:"seccion collection-item collapsed",onclick:function(){e.clickSeccion(event,this)},hijos:[creaObjProp("span",{className:"titulo waves-effect",texto:formato.numRomano(1+Number(t))+a.ds}),creaObjProp("ul",{className:"collection capitulos",hijos:[]})]})},VistaIndice.prototype.creaDomCapitulo=function(t,a){var e=this,o=[],i=!1;for(var s in a.apartados){var r=a.apartados[s],n=a.cd+"/"+(r.cd-1),c=app.state.favoritos.indexOf(n)>-1;c&&(i=!0),o.push(creaObjProp("li",{"data-cd":Number(s)+1,className:"collection-item apartado avatar valign-wrapper"+(c?" starred":""),onclick:function(){e.clickApartado(event,this)},hijos:[creaObjProp("i",{className:"material-icons circle star waves-effect waves-circle",mi:"zmdi icon-mn-favoritos",onclick:function(){e.clickStarButton(event,this)}}),creaObjProp("i",{className:"secondary-content",mi:"chevron-right"}),creaT(r.ds)]}))}return creaObjProp("li",{"data-cd":a.cd,className:"collection-item capitulo collapsed"+(i?" starred":""),onclick:function(){e.clickCapitulo(event,this)},hijos:[creaObjProp("a",{className:"waves-effect waves-circle btn secondary-content",mi:"caret-down",onclick:function(){e.clickExpandButton(event,this)}}),creaObjProp("span",{className:"capNumber",texto:"Capítulo "+a.etiquetaNumCapitulo}),creaObjProp("span",{className:"title",texto:a.ds}),creaObjProp("p",{className:"autores",texto:this.concatAutores(a.autores,"dsNombreApe")}),creaObjProp("ul",{className:"apartados collection",hijos:o})]})},VistaIndice.prototype.toggleShowAll=function(t){this.domBody.toggleClass("favsOnly",!t),t?(jQuery(this.domBody).find("ul.collection.secciones").css("display","block"),jQuery(this.domBody).find(".admonition").remove()):(jQuery(".brand-logo").text("Favoritos"),0==app.state.favoritos.length&&(jQuery(this.domBody).find("ul.collection.secciones").css("display","none"),jQuery(this.domBody).append(this.createAdmon("favs","No hay ningún favorito"))))},VistaIndice.prototype.actualizarFavoritos=function(){jQuery(this.domBody).find("li.capitulo.starred").removeClass("starred"),jQuery(this.domBody).find("li.apartado.starred").removeClass("starred");for(var t in app.state.favoritos){var a=app.state.favoritos[t].split("/").map(function(t){return Number(t)}),e=jQuery(this.domBody).find("li.capitulo[data-cd="+a[0]+"]"),o=e.find("li.apartado[data-cd="+(a[1]+1)+"]");e.addClass("starred"),o.addClass("starred")}},VistaCapitulo.prototype=new Vista,VistaCapitulo.prototype.resize=function(){},VistaCapitulo.prototype.getBody=function(){var t=this;return this.contenido=creaObjProp("div",{className:"book"}),this.domTitle=creaObjProp("span",{className:"title"}),this.domSubTitle=creaObjProp("span",{className:"subtitle"}),this.domStar=creaObjProp("li",{hijos:[creaObjProp("a",{mi:"zmdi icon-btn-favoritos-empty",onclick:function(){t.starChapter(this)}})]}),[creaObjProp("div",{className:"vista-body",hijos:[creaObjProp("div",{className:"navbar-fixed top",hijos:[creaObjProp("nav",{className:"nav-wrapper secondary",hijos:[this.domTitle,this.domSubTitle]})]}),this.contenido,creaObjProp("div",{className:"navbar-fixed bottom",hijos:[creaObjProp("nav",{className:"nav-wrapper",hijos:[creaObjProp("ul",{className:"left",hijos:[creaObjProp("li",{hijos:[creaObjProp("a",{mi:"zmdi icon-btn-izq",onclick:function(){t.previousChapter()}})]}),creaObjProp("li",{hijos:[creaObjProp("a",{mi:"zmdi icon-btn-der",onclick:function(){t.nextChapter()}})]})]}),creaObjProp("ul",{className:"right",hijos:[creaObjProp("li",{hijos:[creaObjProp("a",{mi:"zmdi icon-mn-autores",onclick:function(){t.showMyAuthor()}})]}),creaObjProp("li",{hijos:[creaObjProp("a",{mi:"zmdi icon-btn-indice",onclick:function(){Vista.prototype.newVistaIndice()}})]}),creaObjProp("li",{hijos:[creaObjProp("a",{mi:"zmdi icon-btn-pdf",onclick:function(){t.showMyPDF()}})]}),creaObjProp("li",{hijos:[creaObjProp("a",{mi:"zmdi icon-btn-notas",onclick:function(){t.showMyNotes()}})]}),this.domStar]})]})]})]})]},VistaCapitulo.prototype.tareasPostCarga=function(){this.setCapitulo(this.cap,this.apartado,this.searchString)},VistaCapitulo.prototype.buscaIDSeccion=function(t){for(var a=0;a<app.state.data.secciones.length;a++){var e=app.state.data.secciones[a];if(e.capitulos.indexOf(t)>-1)return e.cd}},VistaCapitulo.prototype.setCapitulo=function(t,a,e){var o=this;this.cap=t,this.apartado=a||0,this.searchString=e,app.showThrobber(),jQuery(this.domTitle).text(this.cap.ds);var i=this.concatAutores(this.cap.autores,"dsIniciales");jQuery(this.domSubTitle).text(i),jQuery(".brand-logo").text("SECCIÓN "+formato.numRomano(this.buscaIDSeccion(t.cd))+"Capítulo "+this.cap.etiquetaNumCapitulo);var s=this.cap.apartados[this.apartado],r="<h3>Cap"+o.cap.cd+"-"+o.apartado+"</h3>";jQuery.get(s.archivo,function(t,a,e){app.removeThrobber(),"error"===a?jQuery(o.contenido).empty().append(r):(o.searchString,jQuery(o.contenido).html(t)),o.scrollTop()}).fail(function(){jQuery(o.contenido).empty().append(r)});var n=this.getKey(),c=app.state.favoritos.indexOf(n)>-1;jQuery(this.domBody).find("i.icon-btn-favoritos-empty").toggleClass("icon-btn-corazon-fill",c),window.history.replaceState({vista:this.id},this.id,"#"+this.id+"/"+this.cap.cd+"-"+this.apartado)},VistaCapitulo.prototype.getKey=function(){return this.cap.cd+"/"+this.apartado},VistaCapitulo.prototype.starChapter=function(t){var a=this.getKey(),e=jQuery(this.domBody).find("i.icon-btn-favoritos-empty");if(e.toggleClass("icon-btn-corazon-fill"),e.hasClass("icon-btn-corazon-fill"))app.state.favoritos.push(a);else{var o=app.state.favoritos.indexOf(a);o>-1&&app.state.favoritos.splice(o,1)}save("favoritos",app.state.favoritos),app.vistaIndice&&app.vistaIndice.actualizarFavoritos()},VistaCapitulo.prototype.previousChapter=function(){if(this.apartado=Number(this.apartado),this.apartado>0)this.apartado=this.apartado-1,this.apartado>this.cap.apartados.length-1&&(this.apartado=this.cap.apartados.length-1),this.setCapitulo(this.cap,this.apartado);else if(this.apartado<=0){var t=getIndiceFila(app.state.data.capitulos,{cd:this.cap.cd}),a=t-1,e=app.state.data.capitulos[a];e&&this.setCapitulo(e,e.apartados.length-1)}},VistaCapitulo.prototype.nextChapter=function(){if(this.apartado=Number(this.apartado),this.cap.apartados.length-1>this.apartado)this.apartado=this.apartado+1,this.apartado>this.cap.apartados.length-1&&(this.apartado=this.cap.apartados.length-1),this.setCapitulo(this.cap,this.apartado);else if(this.cap.apartados.length-1>=this.apartado){var t=getIndiceFila(app.state.data.capitulos,{cd:this.cap.cd}),a=t+1,e=app.state.data.capitulos[a];e&&this.setCapitulo(e,0)}},VistaCapitulo.prototype.showMyAuthor=function(){this.newVistaAutores(this.cap)},VistaCapitulo.prototype.showMyPDF=function(){this.newVistaPDF(this.cap)},VistaAutores.prototype=new Vista,VistaAutores.prototype.getBody=function(){app.showThrobber();for(var t=[],a=0;a<app.state.data.autores.length;a++){for(var e=app.state.data.autores[a],o=[],i=0;i<e.centros.length;i++)o.push(creaT(e.centros[i])),o.push(creaObjProp("BR"));for(var s=this.getCapitulosDelAutor(e),r=[],i=0;i<s.length;i++){var n=s[i];r.push(creaObjProp("li",{className:"collection-item",onclick:this.fnClickCapitulo(n),hijos:[creaObjProp("span",{className:"title",texto:n.ds}),creaObjProp("i",{className:"secondary-content",mi:"chevron-right"})]}))}var c=this.quitaAcentos(e.dsApeNombre);t.push(creaObjProp("li",{"data-cd":a,className:"collection-item avatar autor",hijos:[creaObjProp("i",{className:"material-icons circle star waves-effect waves-circle letter letter"+c}),creaObjProp("span",{className:"title",texto:e.dsApeNombre}),creaObjProp("p",{hijos:o}),creaObjProp("ul",{className:"collection capitulos",hijos:r})]}))}return[creaObjProp("div",{className:"vista-body",hijos:[creaObjProp("ul",{className:"collection autores",hijos:t})]})]},VistaAutores.prototype.fnClickCapitulo=function(t){return function(){Vista.prototype.newVistaCapitulo(t)}},VistaAutores.prototype.tareasPostCarga=function(){this.setCapitulo(this.cap),app.removeThrobber()},VistaAutores.prototype.getCapitulosDelAutor=function(t){for(var a=[],e=0;e<app.state.data.capitulos.length;e++){var o=app.state.data.capitulos[e];o.autores.indexOf(t.cd)>-1&&a.push(o)}return a},VistaAutores.prototype.setCapitulo=function(t){if(this.cap=t,null==this.cap)this.domBody.find(".collection-item.autor").removeClass("hidden");else{this.domBody.find(".collection-item.autor").addClass("hidden");for(var a in this.cap.autores)this.domBody.find(".collection-item.autor[data-cd="+a+"]").removeClass("hidden")}},VistaAutores.prototype.quitaAcentos=function(t){var a=t.slice(0,1);return({"ä":"a","ö":"o","ü":"u","Ä":"A","Ö":"O","Ü":"U","á":"a","à":"a","â":"a","é":"e","è":"e","ê":"e","ú":"u","ù":"u","û":"u","ó":"o","ò":"o","ô":"o","Á":"A","À":"A","Â":"A","É":"E","È":"E","Ê":"E","Ú":"U","Ù":"U","Û":"U","Ó":"O","Ò":"O","Ô":"O"}[a]||a).toUpperCase()},VistaPDF.prototype=new Vista,VistaPDF.prototype.toDOM=function(){app.showThrobber(),this.tareasPostCarga()},VistaPDF.prototype.tareasPostCarga=function(){this.setCapitulo(this.cap),app.removeThrobber()},VistaPDF.prototype.setCapitulo=function(t){this.cap=t,this.viewPDF(this.cap.pdf)},VistaPDF.prototype.viewPDF=function(t){if("android"==cordova.platformId){var a=cordova.file.applicationDirectory+"www/lnk/"+t;window.resolveLocalFileSystemURL(a,function(t){window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory,function(a){t.copyTo(a,"file.pdf",function(t){cordova.plugins.fileOpener2.showOpenWithDialog(t.nativeURL,"application/pdf",{error:function(t){},success:function(){}})})})})}},VistaPresentacion.prototype=new Vista,VistaPresentacion.prototype.getBody=function(){var t=this;return app.showThrobber(),this.contenido=creaObjProp("div",{className:"book"}),this.checkbox=creaObjProp("input",{type:"checkbox",className:"filled-in",checked:"checked"}),[creaObjProp("div",{className:"vista-header"}),creaObjProp("div",{className:"vista-body",hijos:[this.contenido]}),creaObjProp("div",{className:"vista-bottom navbar-fixed",hijos:[creaObjProp("nav",{className:"nav-wrapper",hijos:[creaObjProp("ul",{className:"right",hijos:[creaObjProp("li",{hijos:[creaObjProp("a",{texto:"MENÚ",id:"menu",mi:"zmdi icon-btn-der",onclick:function(){t.clickBotonMenu()}})]})]}),creaObjProp("ul",{className:"left",hijos:[creaObjProp("li",{hijos:[creaObjProp("label",{className:"form-element",hijos:[this.checkbox,creaObjProp("span",{texto:"Mostrar al iniciar"})]})]})]})]})]})]},VistaPresentacion.prototype.tareasPostCarga=function(){jQuery(this.contenido).load(this.url,function(t,a,e){app.removeThrobber(),"error"===a&&jQuery(self.contenido).empty().append("<h3>Error cargando presentación</h3>")}),app.removeThrobber()},VistaPresentacion.prototype.clickBotonMenu=function(){var t=jQuery(this.checkbox).is(":checked");save(VistaPresentacion.prototype.storageKey,t),Vista.prototype.newVistaHome()},VistaPresentacion.prototype.storageKey="VistaPresentacion_mostrarAlIniciar",VistaPresentacion.prototype.shouldShowAtStarUp=function(){var t=get(VistaPresentacion.prototype.storageKey);return null==t||(t instanceof String&&""==t||1==t)},VistaPromueven.prototype=new Vista,VistaPromueven.prototype.getBody=function(){var t=this;app.showThrobber();for(var a=[],e=0;e<app.state.data.promueven.length;e++){var o=app.state.data.promueven[e];a.push(creaObjProp("li",{className:"collection-item row",onclick:t.fnclickLink(o.url),hijos:[creaObjProp("span",{className:"title col s12",texto:o.ds}),creaObjProp("div",{className:"col s11",hijos:[creaObjProp("img",{src:o.img})]}),creaObjProp("span",{className:"secondary-content col s1",mi:"zmdi icon-btn-der"})]}))}return[creaObjProp("div",{className:"vista-body",hijos:[creaObjProp("ul",{className:"collection",hijos:a})]})]},VistaPromueven.prototype.clickLink=function(t){window.open(t,"_system")},VistaPromueven.prototype.fnclickLink=function(t){var a=this;return function(){a.clickLink(t)}},VistaPromueven.prototype.tareasPostCarga=function(){app.removeThrobber()},VistaBuscar.prototype=new Vista,VistaBuscar.prototype.toDOM=function(){this.form.open(),this.generateIndex()},VistaBuscar.prototype.generateIndex=function(){this.listFiles=[];for(var t=0;t<app.state.data.capitulos.length;t++)for(var a=app.state.data.capitulos[t],e=0;e<a.apartados.length;e++){var o=a.apartados[e];this.listFiles.push({archivo:o.archivo,cap_pos:t,ap:o.cd,contenido:null,literal_posicion:a.etiquetaNumCapitulo+(o.cd+1)+" - "+o.ds}),this.readFile(this.listFiles.length-1)}},VistaBuscar.prototype.readFile=function(t){var a=this;$.get(a.listFiles[t].archivo,function(e){a.listFiles[t].contenido=e},"text")},VistaBuscar.prototype.closeSearch=function(){this.form.close(),this.txt.val(null),this.ul.empty()},VistaBuscar.prototype.doSearch=function(){this.searchString=this.txt.val(),this.ul.empty();for(var t=0;t<this.listFiles.length;t++){var a=this.listFiles[t];this.buscar(a,a.contenido)}},VistaBuscar.prototype.buscar=function(t,a){var e=this;if(!(this.searchString.length<3)){var o=new RegExp(this.searchString,"ig");a=jQuery("<div></div>").html(a).text();for(var i;null!==(i=o.exec(a));){var s=i.index,r=i[0],n="..."+i.input.slice(s-45,s)+'<span class="found">'+r+"</span>"+a.slice(s+r.length,s+r.length+45)+"...";e.addResult(t,n,i)}}},VistaBuscar.prototype.addResult=function(t,a,e){var o=this;this.ul.append(creaObjProp("li",{className:"collection-item search-result",onclick:function(){o.navigateResult(t.cap_pos,t.ap)},hijos:[creaObjProp("span",{className:"title",texto:t.literal_posicion}),creaObjProp("p",{html:a})]}))},VistaBuscar.prototype.navigateResult=function(t,a){var e=app.state.data.capitulos[t];this.form.close(),Vista.prototype.newVistaCapitulo(e,a-1,this.searchString)},VistaLegal.prototype=new VistaPresentacion,VistaLegal.prototype.getBody=function(){return app.showThrobber(),this.contenido=creaObjProp("div",{className:"book"}),this.checkbox=creaObjProp("input",{type:"checkbox",className:"filled-in",checked:"checked"}),[creaObjProp("div",{className:"vista-body",hijos:[this.contenido]})]},VistaNotas.prototype=new Vista,VistaNotas.prototype.getBody=function(){return app.showThrobber(),[creaObjProp("div",{className:"vista-body",hijos:[creaObjProp("ul",{className:"collection notas"})]})]},VistaNotas.prototype.refresh=function(){var t=this,a=[],e=this.domBody.find("ul.notas").empty();for(var o in app.state.notas){var i=app.state.notas[o];if(""!=i){var s=buscaFilas(app.state.data.capitulos,{cd:o})[0];a.push(creaObjProp("li",{className:"collection-item avatar nota",hijos:[creaObjProp("span",{className:"title",texto:s.etiquetaNumCapitulo+s.ds}),creaObjProp("span",{className:"material-icons circle"}),creaObjProp("p",{className:"txt nota",texto:i}),creaObjProp("div",{className:"row acciones",hijos:[creaObjProp("span",{className:"btn edit",mi:"edit",texto:"Editar",onclick:t.fnShowMyNotes(s)}),creaObjProp("span",{className:"btn navigate",mi:"chevron-right right",texto:"Navegar",onclick:t.fnNewVistaCapitulo(s)})]})]}))}}0==a.length&&(a=[this.createAdmon("notes","No hay ninguna nota")]),e.append(a)},VistaNotas.prototype.fnShowMyNotes=function(t){var a=this;return function(){a.cap=t,a.showMyNotes()}},VistaNotas.prototype.fnNewVistaCapitulo=function(t){var a=this;return function(){a.newVistaCapitulo(t)}},VistaNotas.prototype.tareasPostCarga=function(){this.refresh(),app.removeThrobber()};