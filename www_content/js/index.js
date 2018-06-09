if (isPhone()){
	document.addEventListener('deviceready', app.onDeviceReady, false);
} else {
	var self=this
	$(document).ready(function(){app.onDeviceReady()} )
}

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
		localStorage.setItem(s, JSON.stringify(v))
	}
	catch(e){
		if (e instanceof QuotaExceededError)
			app.trackEvent('Error', 'QuotaExceededError')
		console.log('No se ha podido guardar el test')
	}
}
//--------------------------------------------------------------------------------
function Application(){
	this.vistaActiva=null
	this.state={data:data}
}
Application.prototype.onDeviceReady=function() {
	this.receivedEvent('deviceready')
}
Application.prototype.initialize=function() {
	// $('.sidenav').sidenav()

	var hash=(document.location.hash+'').substring(1)
	if (hash=='' || hash=='VistaHome'){
		Vista.prototype.newVistaHome()
	} else if (hash=='VistaIndice'){
		Vista.prototype.newVistaIndice()
	}


	jQuery('.sidenav-trigger').click(function(){
		Vista.prototype.newVistaHome()
	})
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
Application.prototype.ponThrobber=function(){
}
var app=new Application()
//--------------------------------------------------------------------------------

function Vista(){
	this.domMenu=jQuery('#navigation_bar .btn-search')

	if (this.id==null) return
	
	var lcaseName=this.id.slice(0,1).toLowerCase()+this.id.slice(1)
	app[lcaseName]=this

	window.history.pushState({vista:this.id}, this.id, '#'+this.id)
	this.loaded=false
}
Vista.prototype.tipos=['VistaHome', 'VistaIndice', 'VistaCapitulo', 'VistaFavoritos', 'VistaNotas', 'VistaAjustes']
Vista.prototype.toDOM=function(desdeHistorial){
	app.trackView(this.id)

	app.ponThrobber()
	
	var xd=jQuery('#content')

	if (app) app.vistaActiva=this
	
	xd.find('.vista').hide()

	var xtipos=this.tipos.join(' ')

	jQuery('body')
		.removeClass( xtipos )
		.addClass(this.id)

	var tb
	if (this.loaded){
		xd.find('.vista.'+this.id).show()
	} else {
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
Vista.prototype.newVistaIndice=function(){
	var vi=new VistaIndice()
	vi.toDOM()
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
		creaObjProp('div', {className:'vista-header', hijos:[
			creaObjProp('img', {src:'img/vista-header.png'})
		]}),

		creaObjProp('div', {className:'vista-body flexcontainer grid', hijos:[
			this.createHomeMenu('', 'Presentación'),
			this.createHomeMenu('skype', 'Índice',this.newVistaIndice, 'doublesize'),
			this.createHomeMenu('', 'Autores'),

			this.createHomeMenu('', 'Favoritos'),
			this.createHomeMenu('', 'Buscar'),
			this.createHomeMenu('', 'Notas'),

			this.createHomeMenu('', 'Promueven'),			
		]}),

		creaObjProp('div', {className:'vista-bottom navbar-fixed', hijos:[
			creaObjProp('nav', {className:'nav-wrapper', hijos:[
				creaObjProp('ul', {className:'right', hijos:[
					this.createBottomBarMenu('info-outline'),
					this.createBottomBarMenu('comment'),
					this.createBottomBarMenu('share'),
				]})
			]})
		]}),
	]
}
VistaHome.prototype.createHomeMenu=function(icono, texto, fnOnClick, extraCLS){
	var self=this
	return creaObjProp('div', {onclick:fnOnClick, mi_circle:icono, className:'home-menu'+(extraCLS?' '+extraCLS: ''), hijos:[
		creaObjProp('span', {texto:texto}),
	]})
}
VistaHome.prototype.createBottomBarMenu=function(icono, texto, extraClassName){
	return creaObjProp('li', {className:'bottom-menu '+extraClassName, hijos:[
		creaObjProp('a', {mi:icono}),
		
	]})
}

//--------------------------------------------------------------------------------

function VistaIndice(){
	this.id='VistaIndice'
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
	app.ponThrobber()

	var l=[]
	for (var sec in app.state.data){
		var xsec=app.state.data[sec]

		var d=creaObjProp('li', {'data-cd':xsec.cd, className:'seccion collection-item collapsed', onclick:function(){self.toggleClassCollapsed(this)}, hijos:[
			creaObjProp('span', {className:'titulo-seccion', texto:sec+'. '+xsec.ds}),
			creaObjProp('ul', {className:'collection capitulos', hijos:[]}),
		]})

		l.push(d)
	}
	return [
		creaObjProp('div', {className:'vista-body', hijos:[
			creaObjProp('ul', {className:'secciones collection', hijos:l})
		]}),
	]
}
VistaIndice.prototype.tareasPostCarga=function(){
	for (var sec in app.state.data){
		var xsec=app.state.data[sec]

		var d=this.domBody.find('.seccion[data-cd='+xsec.cd+'] > .capitulos')

		for (var cap in xsec.capitulos){
			var xcap=xsec.capitulos[cap]

			d.append(
				creaObjProp('li', {'data-cd':xcap.cd, className:'collection-item capitulo avatar', hijos:[
					// creaObjProp(),
					creaObjProp('span', {className:'capNumber', texto:'Capítulo '+xcap.cd}),
					creaObjProp('span', {className:'title', texto:xcap.ds}),
					creaObjProp('p', {className:'autores', texto:xcap.autores}),
				]})
			)
		}


	}
}
VistaIndice.prototype.toggleClassCollapsed=function(dom){
	jQuery(dom).closest('.collection-item.seccion').toggleClass('collapsed')
}
