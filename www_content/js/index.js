var _isPhone
function isPhone(){
	if (_isPhone==null){
		if (document.URL.indexOf("http://") === 0 || document.URL.indexOf("https://") === 0) 
			_isPhone=false
		else
			_isPhone=true
    }
	return _isPhone
}
function creaObjProp(tipo, dicPropiedades){
	var subtipo
	if (tipo.indexOf(':')>-1){
		var temp=tipo.split(':')
		tipo=temp[0];subtipo=temp[1]
	}
	var obj=document.createElement(tipo)
	if (subtipo) obj.type=subtipo

	modObjProp(obj, dicPropiedades)
	return obj
}
function modObjProp(obj, dicPropiedades){
	for (var prop in dicPropiedades){
		var valor=dicPropiedades[prop]
		if (valor==null)
				 continue
		try {
		 	if (prop=='omiteNulo')
			 	continue
		 	else if (prop=='textos') {//separados por \n
				var trozos=valor.split('\\n')
				for (var i=0; i<trozos.length; i++){
					var trozo=trozos[i]

					if (trozo.indexOf('\\t')>-1){
						var _l=trozo.split('\\t')
						for (var j=0; j<_l.length; j++){
							obj.appendChild( document.createTextNode('\u00a0') ) //tab='\u0009', espacio='\u00a0'
							obj.appendChild( document.createTextNode(_l[j]) )
							}
						}
					else
						obj.appendChild( document.createTextNode(trozo) )

					if (i<trozos.length-1) obj.appendChild(creaObjProp('BR'))
					}
				}
		 	else if (prop=='texto' )
				obj.appendChild( document.createTextNode(valor))
		 	else if (prop=='circle'){//materialize
				var xi=document.createElement('i')
				xi.className=valor

				if (obj.firstChild)
					obj.insertBefore(xi, obj.firstChild)
				else
					obj.appendChild(xi)
				}
			else if (prop=='i'){
				var xi=document.createElement('i')
				xi.className=valor

				if (obj.firstChild)
					obj.insertBefore(xi, obj.firstChild)
				else
					obj.appendChild(xi)
				}
			else if (prop=='mi'){//material icons con "ligature"
				var xi=document.createElement('i')			
				xi.className='zmdi zmdi-'+valor
		
				obj.appendChild(xi)
				}
			else if (prop=='mi_circle'){
				var xi=document.createElement('i')			
				xi.className='zmdi zmdi-'+valor

				var wrapper=document.createElement('i')
				wrapper.className='material-icons circle'
				wrapper.appendChild(xi)

				obj.appendChild(wrapper)
				}
			// else if (prop=='fa'){
			// 	if (dicPropiedades['omiteNulo']){
			// 		if ( (dicPropiedades['texto']==null || dicPropiedades['texto']=='') && 
			// 			dicPropiedades['hijo']==null && 
			// 			(dicPropiedades['hijos']==null || dicPropiedades['hijos'].length==0) )
			// 				continue
			// 			}
			// 	var xi=document.createElement('i')
			// 	xi.className='fa '+valor

			// 	if (obj.firstChild)
			// 		obj.insertBefore(xi, obj.firstChild)
			// 	else
			// 		obj.appendChild(xi)
			// 	}
		 	// else if (prop=='stack'){
			// 	var icon_stack=document.createElement('span')
			// 	var lg=''
			// 	if (valor.indexOf('fa-lg')>-1){
			// 		lg=' fa-lg'
			// 		valor=valor.replace('fa-lg', '')
			// 	}
			// 	icon_stack.className='fa-stack icon-stack'+lg


			// 	var icon_circle=document.createElement('i')
			// 	icon_circle.className='fa fa-circle fa-stack-2x'
			// 	icon_stack.appendChild(icon_circle)

			// 	var icon_myElement=document.createElement('i')
			// 	icon_myElement.className='fa fa-stack-1x fa-inverse '+valor
			// 	icon_stack.appendChild(icon_myElement)

			// 	if (obj.firstChild)
			// 			 obj.insertBefore(icon_stack, obj.firstChild)
			// 	else
			// 			 obj.appendChild(icon_stack)
			// 	}
		 	else if (prop=='hijos'){
				for (var i=0; i<valor.length; i++){
					 var trozo=valor[i]
					 obj.appendChild( trozo )
					 }
				}
		 	else if (prop=='hijo')
				obj.appendChild(valor)
		 	else if (prop.indexOf('style.')==0 ) {//error setting a property that has only a getter
				prop=prop.substring(6)
				if (['left', 'top', 'width', 'height'].indexOf(prop)>-1){
				 	valor=valor.toString()
					if (valor.indexOf('px')==-1 && valor.indexOf('%')==-1)
						valor+='px'
					}
				obj.style[prop]=valor
				}
		 	//~ else if (prop=='quitaEstilo')
					//~ quitaEstilo(obj, valor)
		 	else if (prop.indexOf('attr.')==0){
				prop=prop.substring(5)
				obj.setAttribute(prop, valor)
				}
		 	else if (prop.indexOf('data-')==0){
				obj.setAttribute(prop, valor)
				}
		 	else if (prop=='html')
				obj.innerHTML=valor
		 	else
				obj[prop]=valor
				}
		catch (e) {
			console.error('ERROR '+e.message + '\nen '+e.fileName+' linea '+e.lineNumber)
			}
		}
}
function creaT(t){return document.createTextNode(t)}
function buscaFilas(filas, dicBuscado){
	//devuelve el array de filas que cumplen los requisitos
	if (filas==null) return []
	var fn=function(element, index){
		for (var k in dicBuscado){
			if (k.indexOf('_contains_')==0){
				var kt=k.substr( '_contains_'.length )
				var zonaBusqueda=element[kt]
				
				if (zonaBusqueda.toLowerCase().indexOf( ( (dicBuscado[k]+'').toLowerCase() ) )==-1)
					return false
				}
			else if (dicBuscado[k]!=element[k]){
				return false
				}
			}
		return true
		}
	return jQuery.grep(filas, fn)
	}
//
function getIndiceFila(filas, dicBuscado, todas){
	if (filas==null) return -1
	var _idx=0
	filas.map(function(el){el._idx=_idx; _idx++})
	var filas=buscaFilas(filas, dicBuscado)

	if (filas.length==0) 
		return -1

	if (todas!=null && todas==true){
		var ret=[]
		for (var i=0; i<filas.length;i++){
			ret.push( filas[i]._idx )
		}
		return ret
	}
	else{
		var idxBorrar=filas[0]._idx
		return idxBorrar
	}
}
function get(s){return JSON.parse( localStorage.getItem(s) )}
function save(s,v){
	try {
		console.log('Storage.saving '+s+'='+v)
		localStorage.setItem(s, JSON.stringify(v))
	}
	catch(e){
		if (e instanceof QuotaExceededError)
			app.trackEvent('Error', 'QuotaExceededError')
		console.log('No se ha podido guardar el test')
	}
}
var formato={}
formato.numRomano=function(num){
	var ret=''
	if (num==1)
		ret= 'I'
	else if (num==2)
		ret= 'II'
	else if (num==3)
		ret= 'III'
	else if (num==4)
		ret= 'IV'
	else if (num==5)
		ret= 'V'
	else if (num==6)
		ret= 'VI'
	else if (num==7)
		ret= 'VII'
	else if (num==8)
		ret= 'VIII'
	else if (num==9)
		ret= 'IX'
	else if (num==10)
		ret= 'X'
	
	return ret+'. '
}
//--------------------------------------------------------------------------------
function Application(){
	this.vistaActiva=null
	this.state={
		data:data,
		notas:get('notas') || {}, 
		favoritos:get('favoritos') || [],
	}
}
Application.prototype.onDeviceReady=function() {
	this.receivedEvent('deviceready')
}
Application.prototype.initialize=function() {
	// $('.sidenav').sidenav()

	var hash=(document.location.hash+'').substring(1)
	if (hash==''){
		if (VistaPresentacion.prototype.shouldShowAtStarUp())
			Vista.prototype.newVistaPresentacion()
		else
			Vista.prototype.newVistaHome()
	} else if (hash=='VistaHome'){
		Vista.prototype.newVistaHome()
	} else if (hash=='VistaIndice'){
		Vista.prototype.newVistaIndice()
	} else if (hash.startsWith('VistaFavoritos')){
		Vista.prototype.newVistaFavoritos()
	} else if (hash.startsWith('VistaCapitulo')){
		var capitulo_apartado=hash.split('/')[1]
		var temp=capitulo_apartado.split('-')

		var xcap=app.state.data.capitulos[temp[0]-1]
		Vista.prototype.newVistaCapitulo(xcap, temp[1])
	} else if (hash=='VistaAutores'){
		Vista.prototype.newVistaAutores()
	} else if (hash=='VistaPDF'){
		Vista.prototype.newVistaPDF()
	} else if (hash=='VistaPresentacion'){
		Vista.prototype.newVistaPresentacion()
	} else if (hash=='VistaPromueven'){
		Vista.prototype.newVistaPromueven()
	} else if (hash=='VistaLegal'){
		Vista.prototype.newVistaLegal()
	} else if (hash=='VistaNotas'){
		Vista.prototype.newVistaNotas()
	} 

	jQuery('.sidenav-trigger').click(function(){
		Vista.prototype.newVistaHome()
	})

	app.state.favoritos=get('favoritos') || []

	jQuery('.modal').modal()
}
Application.prototype.receivedEvent=function(event){
	app.initialize()
}
Application.prototype.backButton=function(){
	if (this.vistaActiva)
		this.vistaActiva.backButton()
}
Application.prototype.trackView=function(){
}
Application.prototype.trackEvent=function(){
}
Application.prototype.showThrobber=function(){
}
Application.prototype.removeThrobber=function(){
}
Application.prototype.search=function(){
	Vista.prototype.newVistaBuscar()
}
var app=new Application()
//--------------------------------------------------------------------------------
if (isPhone()){
	document.addEventListener('deviceready', function(){app.onDeviceReady()}, false);
} else {
	var self=this
	$(document).ready(function(){app.onDeviceReady()} )
}
//--------------------------------------------------------------------------------

function Vista(){
	this.domMenu=jQuery('#navigation_bar .btn-search')

	if (this.id==null) return
	
	var lcaseName=this.id.slice(0,1).toLowerCase()+this.id.slice(1)
	app[lcaseName]=this

	this.loaded=false
}
Vista.prototype.tipos=['VistaHome', 'VistaIndice', 'VistaCapitulo', 'VistaFavoritos', 'VistaNotas', 'VistaAutores', 'VistaPDF', 'VistaPresentacion', 'VistaPromueven', 'VistaLegal']
Vista.prototype.toDOM=function(desdeHistorial){
	window.history.pushState({vista:this.id}, this.id, '#'+this.id)

	app.trackView(this.id)

	app.showThrobber()
	
	jQuery('.brand-logo').text(this.title)
	var xd=jQuery('#content')

	if (app) app.vistaActiva=this
	
	xd.find('.vista').hide()

	var xtipos=this.tipos.join(' ')

	jQuery('body')
		.removeClass( xtipos )
		.addClass(this.id)

	var tb
	if (this.loaded){
		console.info('#'+this.id+' - reciclada')
		xd.find('.vista.'+this.id).show()
		
	} else {
		console.info('#'+this.id+' - NUEVA')
		var tb=this.getBody()
		if (tb instanceof Array)
			this.domBody=jQuery(tb[0])
		else
			this.domBody=jQuery(tb)

		this.domCont=jQuery(creaObjProp('section', {'style.height':'100%'}))
		this.dom=xd
		xd.append(this.domCont)

		this.domCont
			.append(tb)

		this.tareasPostCarga()
		
	}

	this.domCont
		.removeClass( xtipos )
		.addClass('vista '+this.id)

	this.resize()

	this.loaded=true
}
Vista.prototype.tareasPostCarga=function(){}
Vista.prototype.resize=function(){}
Vista.prototype.backButton=function(){}
Vista.prototype.getBody=function(){}
/////////
Vista.prototype.concatAutores=function(listaAutores, etiqueta){
	var ret=''
	for (var i=0; i<listaAutores.length; i++){
		var indiceAutor=listaAutores[i]
		var autor=buscaFilas(app.state.data.autores, {cd:indiceAutor})[0]

		ret+=autor[etiqueta]
		if (i==listaAutores.length-1){
			//
		} else if (i==listaAutores.length-2){
			ret+=' y '
		} else {
			ret+=', '
		}
	}
	return ret
}
Vista.prototype.showMyNotes=function(){
	var valor=app.state.notas[this.cap.cd]
	jQuery('.modal#myNotes #texto').val( valor )
	jQuery('.modal#myNotes label').toggleClass('active', valor!=null && valor!='')

	jQuery('.modal#myNotes').modal('open')
}
Vista.prototype.saveNotes=function(){
	jQuery('.modal#myNotes').modal('close')
	var valor=jQuery('.modal#myNotes #texto').val()
	if (valor!=null){
		app.state.notas[this.cap.cd]=valor
		save('notas', app.state.notas)
	}
	if (app.vistaActiva==app.vistaNotas)
		app.vistaNotas.refresh()
}
Vista.prototype.createAdmon=function(className, texto){
	return creaObjProp('div', {className:'admonition '+className, hijos:[
		creaObjProp('div', {className:'row img'}),
		creaObjProp('div', {className:'row txt', hijos:[
			creaT(texto)
		]})	
	]})
}
/////////
Vista.prototype.newVistaIndice=function(){
	if (app.vistaIndice){
		app.vistaIndice.toDOM()
	}
	else {
		var v=new VistaIndice()
		v.toDOM()
	}
	app.vistaIndice.toggleShowAll(true)
}
Vista.prototype.newVistaFavoritos=function(){
	if (app.vistaIndice){
		app.vistaIndice.toDOM()
	}
	else {
		var v=new VistaIndice()
		v.toDOM()
	}
	app.vistaIndice.toggleShowAll(false)
}
Vista.prototype.newVistaHome=function(){
	if (app.vistaHome){
		app.vistaHome.toDOM()
	}
	else {
		var v=new VistaHome()
		v.toDOM()
	}
}
Vista.prototype.newVistaAutores=function(cap){
	if (cap instanceof Event)
		cap=null
	if (app.vistaAutores){
		app.vistaAutores.setCapitulo(cap)
		app.vistaAutores.toDOM()
	}
	else {
		var v=new VistaAutores(cap)
		v.toDOM()
	}
}
Vista.prototype.newVistaCapitulo=function(capitulo, apartado, searchString){
	if (app.vistaCapitulo){
		app.vistaCapitulo.toDOM()
		app.vistaCapitulo.setCapitulo(capitulo, apartado, searchString)
	}
	else {
		var v=new VistaCapitulo(capitulo, apartado, searchString)
		v.toDOM()
	}
}
Vista.prototype.newVistaPDF=function(cap){
	if (app.vistaPDF){
		app.vistaPDF.setCapitulo(cap)
		app.vistaPDF.toDOM()
	}
	else {
		var v=new VistaPDF(cap)
		v.toDOM()
	}
}
Vista.prototype.newVistaPresentacion=function(){
	if (app.vistaPresentacion){
		app.vistaPresentacion.toDOM()
	}
	else {
		var v=new VistaPresentacion()
		v.toDOM()
	}
}
Vista.prototype.newVistaPromueven=function(){
	if (app.vistaPromueven){
		app.vistaPromueven.toDOM()
	}
	else {
		var v=new VistaPromueven()
		v.toDOM()
	}
}
Vista.prototype.newVistaBuscar=function(){
	if (app.vistaBuscar){
		app.vistaBuscar.toDOM()
	}
	else {
		var v=new VistaBuscar()
		v.toDOM()
	}
}
Vista.prototype.newVistaLegal=function(){
	if (app.vistaLegal){
		app.vistaLegal.toDOM()
	}
	else {
		var v=new VistaLegal()
		v.toDOM()
	}
}
Vista.prototype.newVistaCompartir=function(){
	var t="App Hemostasia y Trombosis, descarga gratuita\n\n  https://bit.ly/hemostrombo"
	window.plugins.socialsharing.share(t)
}
Vista.prototype.newvistaValorar=function(){
	AppRate.preferences={
		useLanguage:'es-ES',
		storeAppURL:{
		   ios:'XX', //686440023
		   android:'market://details?id=com.imaidea.aranediciones.hemostrombo'
		   },
		simpleMode:true,
		openStoreInApp:false,
		callbacks:{
		   onButtonClicked:function(id){
				if (q[id] == 'yes' && device.platform == 'iOS')
					cordova.plugins.market.open('tms-apps://itunes.apple.com/app/viewContentsUserReviews/id686440022?mt=8')
			},
		},
		customLocale: {
			title:   			"¿Quieres valorar esta App?",
			message: 			"Solo te llevará unos segundos.",
			cancelButtonLabel: 	"No, gracias",
			laterButtonLabel:  	"Más tarde",
			rateButtonLabel:   	"Sí",
		}
	}
	
	AppRate.preferences.callbacks.onRateDialogShow = function(callback){ callback(1) }
	// AppRate.preferences.useCustomRateDialog = true

	AppRate.promptForRating(true)
}
Vista.prototype.newVistaNotas=function(){
	if (app.vistaNotas){
		app.vistaNotas.toDOM()
		app.vistaNotas.refresh()
	}
	else {
		var v=new VistaNotas()
		v.toDOM()
	}
}
//--------------------------------------------------------------------------------
function VistaHome(){
	this.id='VistaHome'
	Vista.call(this)
	
}
VistaHome.prototype=new Vista
VistaHome.prototype.resize=function(){
	// this.hVista=window.innerHeight
	// if (this.domBody) 
	// 	this.domBody.height( this.hVista )
}
VistaHome.prototype.getBody=function(){
	return [
		creaObjProp('div', {className:'vista-header'}),

		creaObjProp('div', {className:'vista-body flexcontainer grid', hijos:[
			this.createHomeMenu('', 'Presentación', this.newVistaPresentacion,  'presentacion'),
			this.createHomeMenu('', 'Índice',       this.newVistaIndice, 		'indice'),
			this.createHomeMenu('', 'Autores',  	this.newVistaAutores, 		'autores'),

			this.createHomeMenu('', 'Favoritos', 	this.newVistaFavoritos, 	'favoritos'),
			this.createHomeMenu('', 'Buscar',  		this.newVistaBuscar, 		'buscar'),
			this.createHomeMenu('', 'Notas', 		this.newVistaNotas, 		'notas'),

			this.createHomeMenu('', 'Promueven', this.newVistaPromueven,  		'promueven'),
		]}),

		creaObjProp('div', {className:'vista-bottom navbar-fixed', hijos:[
			creaObjProp('nav', {className:'nav-wrapper', hijos:[
				creaObjProp('ul', {className:'right', hijos:[
					this.createBottomBarMenu('info-outline icon-btn-legal', this.newVistaLegal),
					this.createBottomBarMenu('comment icon-btn-comentar', this.newvistaValorar),
					this.createBottomBarMenu('share icon-btn-compartir', this.newVistaCompartir),
				]})
			]})
		]}),
	]
}
VistaHome.prototype.createHomeMenu=function(icono, texto, fnOnClick, extraCLS){
	var self=this
	return creaObjProp('div', {onclick:fnOnClick, mi:icono, className:'home-menu'+(extraCLS?' '+extraCLS: ''), hijos:[
		// creaObjProp('span', {texto:texto}),
	]})
}
VistaHome.prototype.createBottomBarMenu=function(icono, onclick){
	return creaObjProp('li', {className:'bottom-menu', onclick:onclick, hijos:[
		creaObjProp('a', {mi:icono}),
		
	]})
}
//--------------------------------------------------------------------------------

function VistaIndice(favsOnly){
	this.id='VistaIndice'
	this.title='ÍNDICE DE CAPÍTULOS'
	Vista.call(this)
}
VistaIndice.prototype=new Vista
VistaIndice.prototype.resize=function(){
	// this.hVista=window.innerHeight
	// if (this.domBody) 
	// 	this.domBody.height( this.hVista )
}
VistaIndice.prototype.getBody=function(){
	var self=this

	var l=[]
	for (var sec in app.state.data.secciones){
		var xsec=app.state.data.secciones[sec]
		l.push( this.creaDomSeccion(sec, xsec) )
	}
	return [
		creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('ul', {className:'secciones collection', hijos:l})
		]}),
	]
	
}
VistaIndice.prototype.tareasPostCarga=function(){
	for (var sec in app.state.data.secciones){
		var xsec=app.state.data.secciones[sec]

		var d=this.domBody.find('.seccion[data-cd='+xsec.cd+'] > .capitulos')

		for (var i in xsec.capitulos){
			var cap=xsec.capitulos[i]
			var xcap=app.state.data.capitulos[cap-1]

			d.append(
				this.creaDomCapitulo(cap, xcap)
			)
		}
	}
}
VistaIndice.prototype.clickSeccion=function(event, dom){
	event.stopPropagation()
	
	var xdom=jQuery(dom)
	xdom.closest('.collection-item.seccion').toggleClass('collapsed')
}
VistaIndice.prototype.clickCapitulo=function(event, dom){
	event.stopPropagation()

	var capitulo=this.getCapituloForDom(dom)
	this.newVistaCapitulo(capitulo)
}
VistaIndice.prototype.clickApartado=function(event, dom){
	event.stopPropagation()

	var capitulo=this.getCapituloForDom(dom)
	var apartado=this.getApartadoForDom(dom)
	this.newVistaCapitulo(capitulo, apartado.cd-1)
}
VistaIndice.prototype.clickExpandButton=function(event, dom){
	event.stopPropagation()

	var xdom=jQuery(dom)
	xdom.closest('.collection-item.capitulo').toggleClass('collapsed')
}
VistaIndice.prototype.clickStarButton=function(event, dom){
	event.stopPropagation()

	var xdom=jQuery(dom)
	var nodoCapitulo=xdom.closest('.collection-item.capitulo')
	nodoCapitulo.toggleClass('starred')

	var nodoApartado=xdom.closest('.collection-item.apartado')
	nodoApartado.toggleClass('starred')

	var cap_cd=nodoCapitulo.data('cd')
	var ap_cd=nodoApartado.data('cd')

	var key=cap_cd + '/' + (ap_cd-1)
	if (nodoApartado.hasClass('starred')){
		app.state.favoritos.push(key)
	} else {
		var index=app.state.favoritos.indexOf(key)
		if (index>-1)
			app.state.favoritos.splice(index, 1)
	}
	
	save('favoritos', app.state.favoritos)
}
VistaIndice.prototype.getCapituloForDom=function(dom){
	var xdom=jQuery(dom)
	var numCapitulo=xdom.closest('.collection-item.capitulo').data('cd')
	return app.state.data.capitulos[numCapitulo-1]
}
VistaIndice.prototype.getApartadoForDom=function(dom){
	var xdom=jQuery(dom)
	
	var numCapitulo=xdom.closest('.collection-item.capitulo').data('cd')
	var numApartado=xdom.closest('.collection-item.apartado').data('cd')

	return app.state.data.capitulos[numCapitulo-1].apartados[numApartado-1]
}
VistaIndice.prototype.creaDomSeccion=function(num, data){
	var self=this
	return creaObjProp('li', {'data-cd':data.cd, className:'seccion collection-item collapsed', onclick:function(){self.clickSeccion(event, this)}, hijos:[
		creaObjProp('span', {className:'titulo waves-effect', texto:formato.numRomano(1+Number(num) )+data.ds}),
		creaObjProp('ul', {className:'collection capitulos', hijos:[]}),
	]})
}
VistaIndice.prototype.creaDomCapitulo=function(num, data){
	var self=this

	var l=[], has_any_star=false
	for (var i in data.apartados){
		var apartado=data.apartados[i]

		var key=data.cd + '/' + (apartado.cd-1)
		var has_star=app.state.favoritos.indexOf(key)>-1
		if (has_star) has_any_star=true

		l.push(creaObjProp('li', {
			'data-cd':Number(i)+1,
			className:'collection-item apartado avatar valign-wrapper'+(has_star?' starred':''), 
			onclick:function(){self.clickApartado(event, this)}, 
			hijos:[
				creaObjProp('i', {className:'material-icons circle star waves-effect waves-circle', mi:'zmdi icon-mn-favoritos', onclick:function(){self.clickStarButton(event, this)},}),
				creaObjProp('i', {className:'secondary-content', mi:'chevron-right'}),
				creaT(apartado.ds)
			]
		}))
	}

	return creaObjProp('li', {'data-cd':data.cd, className:'collection-item capitulo collapsed'+(has_any_star?' starred':''), onclick:function(){self.clickCapitulo(event, this)}, hijos:[
		creaObjProp('a', {className:'waves-effect waves-circle btn secondary-content', mi:'caret-down', onclick:function(){self.clickExpandButton(event, this)}, }),
			creaObjProp('span', {className:'capNumber', texto:'Capítulo '+data.etiquetaNumCapitulo}),
			creaObjProp('span', {className:'title', texto:data.ds}),
			
			creaObjProp('p', {className:'autores', texto: this.concatAutores(data.autores, 'dsNombreApe') }),
			creaObjProp('ul', {className:'apartados collection', hijos:l}),
	]})
}
VistaIndice.prototype.toggleShowAll=function(force){
	this.domBody.toggleClass('favsOnly', !force)
	if (!force){
		jQuery('.brand-logo').text('Favoritos')

		if (app.state.favoritos.length==0){
			jQuery(this.domBody).find('ul.collection.secciones').css('display', 'none')
			jQuery(this.domBody).append(
				this.createAdmon('favs', 'No hay ningún favorito')
			)
		}
	} else {
		jQuery(this.domBody).find('ul.collection.secciones').css('display', 'block')
		jQuery(this.domBody).find('.admonition').remove()
	}

}
VistaIndice.prototype.actualizarFavoritos=function(){
	jQuery(this.domBody).find('li.capitulo.starred').removeClass('starred')
	jQuery(this.domBody).find('li.apartado.starred').removeClass('starred')

	for (var i in app.state.favoritos){
		var datos=app.state.favoritos[i].split('/').map(function(a){return Number(a)})

		var domCap=jQuery(this.domBody).find('li.capitulo[data-cd='+datos[0]+']')
		var domAp=domCap.find('li.apartado[data-cd='+(datos[1]+1)+']')

		domCap.addClass('starred')
		domAp.addClass('starred')
	}
}
//--------------------------------------------------------------------------------

function VistaCapitulo(cap, apartado, searchString){
	this.id='VistaCapitulo'
	Vista.call(this)

	this.cap=cap
	this.apartado=apartado
	this.searchString=searchString

	this.domTitle=null
	this.domSubTitle=null
}
VistaCapitulo.prototype=new Vista
VistaCapitulo.prototype.resize=function(){
	// this.hVista=window.innerHeight
	// if (this.domBody) 
	// 	this.domBody.height( this.hVista )
}
VistaCapitulo.prototype.getBody=function(){
	var self=this

	this.contenido=creaObjProp('div', {className:'book'})
	this.domTitle=creaObjProp('span', {className:'title'})
	this.domSubTitle=creaObjProp('span', {className:'subtitle'})

	this.domStar=creaObjProp('li', {hijos:[
		creaObjProp('a', {mi:'zmdi icon-btn-favoritos-empty', onclick:function(){self.starChapter(this)} })
	]})

	// this.domStar=creaObjProp('li', {hijos:[
	// 	creaObjProp('a', {onclick:self.starChapter, hijos:[
	// 		creaObjProp('i', {className:'zmdi zmdi-zmdi icon-btn-favoritos-empty', hijos:[
	// 			creaObjProp('span', {className:'path1'}),
	// 			creaObjProp('span', {className:'path2'}),
	// 		]})
	// 	]})
	// ]})

	return [
		creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('div', {className:'navbar-fixed top', hijos:[
				creaObjProp('nav', {className:'nav-wrapper secondary', hijos:[
					this.domTitle,
					this.domSubTitle,
				]}),
			]}),
			this.contenido,
			creaObjProp('div', {className:'navbar-fixed bottom', hijos:[
				creaObjProp('nav', {className:'nav-wrapper', hijos:[
					creaObjProp('ul', {className:'left', hijos:[
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'zmdi icon-btn-izq', onclick:function(){self.previousChapter()} })
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'zmdi icon-btn-der', onclick:function(){self.nextChapter()} })
						]}),
					]}),
					creaObjProp('ul', {className:'right', hijos:[
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'zmdi icon-mn-autores', onclick:function(){self.showMyAuthor()}})
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'zmdi icon-btn-indice', onclick:function(){Vista.prototype.newVistaIndice() }})
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'zmdi icon-btn-pdf', onclick:function(){self.showMyPDF()}})
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'zmdi icon-btn-notas', onclick:function(){self.showMyNotes()}})
						]}),
						this.domStar,
					]})
				]})
			]})
		]}),
	]
}
VistaCapitulo.prototype.tareasPostCarga=function(){
	this.setCapitulo(this.cap, this.apartado, this.searchString)
}
VistaCapitulo.prototype.buscaIDSeccion=function(cap){
	for (var i=0; i<app.state.data.secciones.length; i++){
		var sec=app.state.data.secciones[i]
		if (sec.capitulos.indexOf(cap)>-1){
			return sec.cd
		}
	}
}
VistaCapitulo.prototype.setCapitulo=function(cap, apartado, searchString){
	var self=this

	this.cap=cap
	this.apartado=apartado || 0
	this.searchString=searchString

	app.showThrobber()
	jQuery(this.domTitle).text(this.cap.ds)

	var autores=this.concatAutores(this.cap.autores, 'dsIniciales')
	jQuery(this.domSubTitle).text(autores)

	jQuery('.brand-logo').text('SECCIÓN '+formato.numRomano( this.buscaIDSeccion(cap.cd) )+'Capítulo '+this.cap.etiquetaNumCapitulo)
	
	var data=this.cap.apartados[this.apartado]

	var alternativeText='<h3>Cap'+self.cap.cd+'-'+self.apartado+'</h3>'
	jQuery.get( data.archivo, function(response, status, xhr) {
		app.removeThrobber()
		if (status==='error')
			jQuery(self.contenido).empty().append(alternativeText)
		else if (self.searchString)
			jQuery(self.contenido).html(response)
		else
			jQuery(self.contenido).html(response)
		
	}).fail(
		function(){
			jQuery(self.contenido).empty().append(alternativeText)
		}
	)

	var key=this.getKey()
	var has_star=app.state.favoritos.indexOf(key)>-1
	jQuery(this.domBody).find('i.icon-btn-favoritos-empty').toggleClass('icon-btn-corazon-fill', has_star)

	window.history.replaceState({vista:this.id}, this.id, '#'+this.id+'/'+this.cap.cd+'-'+this.apartado)
}
VistaCapitulo.prototype.getKey=function(){
	return this.cap.cd + '/' + this.apartado
}
VistaCapitulo.prototype.starChapter=function(dom){
	var key=this.getKey()

	var xstar=jQuery(this.domBody).find('i.icon-btn-favoritos-empty')
	xstar.toggleClass('icon-btn-corazon-fill')
	
	if (xstar.hasClass('icon-btn-corazon-fill'))
		app.state.favoritos.push(key)
	else {
		var index=app.state.favoritos.indexOf(key)
		if (index>-1)
			app.state.favoritos.splice(index, 1)
	}
	save('favoritos', app.state.favoritos)
	
	if (app.vistaIndice) 
		app.vistaIndice.actualizarFavoritos()
}
VistaCapitulo.prototype.previousChapter=function(){
	this.apartado=Number(this.apartado)

	if (this.apartado>0){
		this.apartado=this.apartado-1
		
		if (this.apartado>this.cap.apartados.length-1)
			this.apartado=this.cap.apartados.length-1

		this.setCapitulo(this.cap, this.apartado)
	} else if (this.apartado<=0) {
		var prevChapterID=app.vistaActiva.cap.cd-1
		var prevChapter=app.state.data.capitulos[ prevChapterID-1 ]

		if (prevChapter){
			this.setCapitulo(prevChapter, prevChapter.apartados.length-1)
		} 
	}
}
VistaCapitulo.prototype.nextChapter=function(){
	this.apartado=Number(this.apartado)

	if (this.cap.apartados.length-1>this.apartado){
		this.apartado=this.apartado+1

		if (this.apartado>this.cap.apartados.length-1)
			this.apartado=this.cap.apartados.length-1

		this.setCapitulo(this.cap, this.apartado)
	} else if (this.cap.apartados.length-1>=this.apartado){
		var nextChapterID=app.vistaActiva.cap.cd
		var nextChapter=app.state.data.capitulos[ nextChapterID ]

		if (nextChapter){
			this.setCapitulo(nextChapter, 0)
		} 
	}
}
VistaCapitulo.prototype.showMyAuthor=function(){
	this.newVistaAutores(this.cap)
}
VistaCapitulo.prototype.showMyPDF=function(){
	this.newVistaPDF(this.cap)
}
//--------------------------------------------------------------------------------

function VistaAutores(cap){
	this.id='VistaAutores'
	this.cap=cap
	this.title='Autores'
	Vista.call(this)
}
VistaAutores.prototype=new Vista
VistaAutores.prototype.getBody=function(){
	app.showThrobber()

	var hijos=[]
	for (var i=0; i<app.state.data.autores.length; i++){
		var autor=app.state.data.autores[i]

		var textos=[]
		for (var j=0; j<autor.centros.length; j++){
			textos.push( creaT( autor.centros[j] ) )
			textos.push( creaObjProp('BR'))
		}

		var capitulosDelAutor=this.getCapitulosDelAutor(autor)
		var capitulos=[]
		for (var j=0; j<capitulosDelAutor.length; j++){
			var cap=capitulosDelAutor[j]

			capitulos.push(
				creaObjProp('li', {className:'collection-item', onclick:this.fnClickCapitulo(cap), hijos:[
					creaObjProp('span', {className:'title', texto:cap.ds}), 
					creaObjProp('i', {className:'secondary-content', mi:'chevron-right'}),
				]})
			)
		}

		var inicial=autor.dsApeNombre.slice(0,1)
		hijos.push(
			creaObjProp('li', {'data-cd':i, className:'collection-item avatar autor', hijos:[
				creaObjProp('i', {className:'material-icons circle star waves-effect waves-circle letter letter'+inicial, }),
				creaObjProp('span', {className:'title', texto:autor.dsApeNombre}),
				creaObjProp('p', {hijos:textos}),
				
				creaObjProp('ul', {className:'collection capitulos', hijos:capitulos})
			]})
		)
	}

	return [
		creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('ul', {className:'collection autores', hijos:hijos})
		]})
	]	
}
VistaAutores.prototype.fnClickCapitulo=function(cap){
	return function(){Vista.prototype.newVistaCapitulo(cap)}
}
VistaAutores.prototype.tareasPostCarga=function(){
	this.setCapitulo(this.cap)
	app.removeThrobber()
}
VistaAutores.prototype.getCapitulosDelAutor=function(autor){
	var ret=[]
	for (var i=0; i<app.state.data.capitulos.length; i++){
		var cap=app.state.data.capitulos[i]
		if (cap.autores.indexOf(autor.cd)>-1)
			ret.push(cap)
	}
	return ret
}
VistaAutores.prototype.setCapitulo=function(cap){
	this.cap=cap

	if (this.cap==null){//mostramos todos
		this.domBody.find('.collection-item.autor').removeClass('hidden')
	} else{
		this.domBody.find('.collection-item.autor').addClass('hidden')

		for (var i in this.cap.autores){
			this.domBody.find('.collection-item.autor[data-cd='+i+']').removeClass('hidden')
		}
	}
}

//--------------------------------------------------------------------------------
function VistaPDF(cap){
	this.id='VistaPDF'
	Vista.call(this)

	this.cap=cap
}
VistaPDF.prototype=new Vista
VistaPDF.prototype.toDOM=function(){
	app.showThrobber()
}
VistaPDF.prototype.tareasPostCarga=function(){
	this.setCapitulo(this.cap)
	app.removeThrobber()
}
VistaPDF.prototype.setCapitulo=function(cap){
	this.cap=cap
	this.viewPDF(this.cap.pdf)
}
VistaPDF.prototype.viewPDF=function(ruta){
	//https://www.raymondcamden.com/2016/06/26/linking-to-pdfs-in-cordova-apps
	
	if (cordova.platformId=='android'){
		var path=cordova.file.applicationDirectory+'www/lnk/'+ruta

		console.log('File ', path, ' >>')
		window.resolveLocalFileSystemURL(path, function(fileEntry) {
			window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
				fileEntry.copyTo(dirEntry, 'file.pdf', function(newFileEntry) {

					console.log('>> Copied to ', newFileEntry.nativeURL)
					cordova.plugins.fileOpener2.showOpenWithDialog(newFileEntry.nativeURL, 'application/pdf', { 
						error : function(e) { 
							console.log('Error status: ' + e.status + ' - Error message: ' + e.message)
						},
						success : function () {
							console.log('file opened successfully')				
						}
					})
				})
			})
		})
	}
}

//--------------------------------------------------------------------------------
function VistaPresentacion(){
	Vista.call(this)

	this.id='VistaPresentacion'
	this.title='Presentación'
	this.url='data/presentacion/presentacion.html'
}
VistaPresentacion.prototype=new Vista
VistaPresentacion.prototype.getBody=function(){
	var self=this

	app.showThrobber()
	
	this.contenido=creaObjProp('div', {className:'book'})
	this.checkbox=creaObjProp('input', {type:'checkbox', className:'filled-in', checked:'checked'})

	return [
		creaObjProp('div', {className:'vista-header'}),

		creaObjProp('div', {className:'vista-body', hijos:[
			this.contenido
		]}),

		creaObjProp('div', {className:'vista-bottom navbar-fixed', hijos:[
			creaObjProp('nav', {className:'nav-wrapper', hijos:[
				creaObjProp('ul', {className:'right', hijos:[
					creaObjProp('li', {hijos:[
						creaObjProp('a', {texto:'MENÚ', id:'menu', mi:'zmdi icon-btn-der', onclick:function(){self.clickBotonMenu()} }),
						
					]})
				]}),

				creaObjProp('ul', {className:'left', hijos:[
					creaObjProp('li', {hijos:[
						creaObjProp('label', {className:'form-element', hijos:[
							this.checkbox,
							creaObjProp('span', {texto:'Mostrar al iniciar'}),
						]}),
					]})
				]}),

			]})
		]}),


	]
}
VistaPresentacion.prototype.tareasPostCarga=function(){
	jQuery(this.contenido).load( this.url, function(response, status, xhr) {
		app.removeThrobber()
		if (status==='error'){
			jQuery(self.contenido).empty().append('<h3>Error cargando presentación</h3>')
		}
	})

	app.removeThrobber()
}
VistaPresentacion.prototype.clickBotonMenu=function(){
	var valor=jQuery(this.checkbox).is(':checked')
	save(VistaPresentacion.prototype.storageKey, valor)

	Vista.prototype.newVistaHome()
}
VistaPresentacion.prototype.storageKey='VistaPresentacion_mostrarAlIniciar'
VistaPresentacion.prototype.shouldShowAtStarUp=function(){
	var valor=get(VistaPresentacion.prototype.storageKey)

	if (valor==null)
		return true
	else if (valor instanceof String && valor=='')
		return true
	else if (valor==true)
		return true
	else
		return false
}

//--------------------------------------------------------------------------------
function VistaPromueven(){
	this.id='VistaPromueven'
	this.title='Promueven'
	Vista.call(this)
}
VistaPromueven.prototype=new Vista
VistaPromueven.prototype.getBody=function(){
	var self=this

	app.showThrobber()
	
	var hijos=[]

	for (var i=0; i<app.state.data.promueven.length; i++){
		var f=app.state.data.promueven[i]

		hijos.push( creaObjProp('li', {className:'collection-item row', onclick:self.fnclickLink(f.url), hijos:[
			creaObjProp('span', {className:'title col s12', texto:f.ds}),
			creaObjProp('div', {className:'col s11', hijos:[
				creaObjProp('img', {src:f.img}),
			]}),
			creaObjProp('span', {className:'secondary-content col s1', mi:'zmdi icon-btn-der'})
		]}) )
	}

	return [
		creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('ul', {className:'collection', hijos:hijos})
		]}),

	]
}
VistaPromueven.prototype.clickLink=function(url){
	console.log(url)
}
VistaPromueven.prototype.fnclickLink=function(url){
	var self=this
	return function(){
		self.clickLink(url)
	}
}
VistaPromueven.prototype.tareasPostCarga=function(){
	app.removeThrobber()
}

//--------------------------------------------------------------------------------
function VistaBuscar(){
	this.id='VistaBuscar'
	
	var xform=jQuery('.modal#buscar')
	this.ul=xform.find('ul')
	this.txt=xform.find('input')
	
	this.form = M.Modal.init(xform[0], {dismissible:false})
	
	Vista.call(this)
}
VistaBuscar.prototype=new Vista
VistaBuscar.prototype.toDOM=function(){
	var self=this

	this.form.open()
	this.generateIndex()
}
VistaBuscar.prototype.generateIndex=function(){
	// if (this.filesIndexed) return

	this.listFiles=[]
	for (var i=0; i<app.state.data.capitulos.length; i++){
		var cap=app.state.data.capitulos[i]
		for (var j=0; j<cap.apartados.length; j++){
			var ap=cap.apartados[j]
			this.listFiles.push({archivo:ap.archivo, cap_pos:i, ap:ap.cd, contenido:null, literal_posicion:cap.etiquetaNumCapitulo+(ap.cd+1)+' - '+ap.ds})

			this.readFile(this.listFiles.length-1)
		}
	}
	// this.filesIndexed=true
}
VistaBuscar.prototype.readFile=function(i){
	var self=this

	$.get(self.listFiles[i].archivo, function(data) {
		self.listFiles[i].contenido=data
	}, 'text')
}
VistaBuscar.prototype.closeSearch=function(){
	this.form.close()
	this.txt.val(null)
	this.ul.empty()
}
VistaBuscar.prototype.doSearch=function(){
	this.searchString=this.txt.val()
	this.ul.empty()

	for (var i=0; i<this.listFiles.length; i++){
		var fileEntry=this.listFiles[i]
		this.buscar(fileEntry, fileEntry.contenido)
	}
}
VistaBuscar.prototype.buscar=function(fileEntry, str){
	var self=this

	if (this.searchString.length<3){
		return
	}

	var myRe = new RegExp(this.searchString, "ig")
	
	var dd=jQuery('<div></div>')
	str=dd.html(str).text()

	// console.log(str)

	var result, context=45, matchDelimiter0='<span class="found">', matchDelimiter1='</span>'
	while ((result = myRe.exec(str)) !== null) {
		var pos=result.index
		var exp=result[0]

		var snippet='...' + result.input.slice(pos-context, pos) + 
					matchDelimiter0 + exp + matchDelimiter1+
					str.slice(pos+exp.length, pos+exp.length+context)+'...'

		// var msg = 'Found at ' + pos + ' --> '+snippet
		// console.log(msg)

		self.addResult(fileEntry, snippet, result)
	}
}
VistaBuscar.prototype.addResult=function(fileEntry, snippet, result){
	var self=this
	this.ul.append(
		creaObjProp('li', {className:'collection-item search-result', onclick:function(){self.navigateResult(fileEntry.cap_pos, fileEntry.ap)}, hijos:[
			creaObjProp('span', {className:'title', texto:fileEntry.literal_posicion}),
			creaObjProp('p', {html:snippet}),			
		]})
	)
}
VistaBuscar.prototype.navigateResult=function(cap_pos, ap){
	var cap=app.state.data.capitulos[cap_pos]
	
	this.form.close()
	Vista.prototype.newVistaCapitulo(cap, ap-1, this.searchString)
}
//--------------------------------------------------------------------------------
function VistaLegal(){
	this.id='VistaLegal'
	this.title='Legal'
	this.url='data/legal/legal.html'

	Vista.call(this)
}
VistaLegal.prototype=new VistaPresentacion
VistaLegal.prototype.getBody=function(){
	var self=this

	app.showThrobber()
	
	this.contenido=creaObjProp('div', {className:'book'})
	this.checkbox=creaObjProp('input', {type:'checkbox', className:'filled-in', checked:'checked'})

	return [
		creaObjProp('div', {className:'vista-body', hijos:[
			this.contenido
		]}),
	]
}

//--------------------------------------------------------------------------------

function VistaNotas(){
	this.id='VistaNotas'
	this.title='Notas'
	Vista.call(this)
}
VistaNotas.prototype=new Vista
VistaNotas.prototype.getBody=function(){
	app.showThrobber()
	
	return [
		creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('ul', {className:'collection notas'})
		]}),

	]
}
VistaNotas.prototype.refresh=function(){
	var self=this

	var hijos=[]
	var ulNotas=this.domBody.find('ul.notas').empty()

	for (var key in app.state.notas){
		var nota=app.state.notas[key]

		if (nota=='') continue
		var cap=buscaFilas(app.state.data.capitulos, {cd:key})[0]

		hijos.push( creaObjProp('li', {className:'collection-item avatar nota', hijos:[
			creaObjProp('span', {className:'title', texto:cap.etiquetaNumCapitulo + cap.ds}),
			creaObjProp('span', {className:'material-icons circle'}),
			creaObjProp('p', {className:'txt nota', texto:nota}), 

			creaObjProp('div', {className:'row acciones', hijos:[
				creaObjProp('span', {className:'btn edit', mi:'edit', texto:'Editar', onclick:self.fnShowMyNotes(cap) }),
				creaObjProp('span', {className:'btn navigate', mi:'chevron-right right', texto:'Navegar', onclick:self.fnNewVistaCapitulo(cap)}),
			]})
			
		]}) )
	}

	if (hijos.length==0){
		hijos=[
			this.createAdmon('notes', 'No hay ninguna nota')
		]
	}


	ulNotas.append(hijos)
}
VistaNotas.prototype.fnShowMyNotes=function(cap){
	var self=this
	return function(){
		self.cap=cap
		self.showMyNotes()
	}
}
VistaNotas.prototype.fnNewVistaCapitulo=function(cap){
	var self=this
	return function(){
		self.newVistaCapitulo(cap)
	}
}
VistaNotas.prototype.tareasPostCarga=function(){
	this.refresh()
	app.removeThrobber()
}
