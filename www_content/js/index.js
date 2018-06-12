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
	} else if (hash.startsWith('VistaCapitulo')){
		var capitulo_apartado=hash.split('/')[1]
		var temp=capitulo_apartado.split('-')

		var xcap=app.state.data.capitulos[temp[0]-1]
		Vista.prototype.newVistaCapitulo(xcap, temp[1])
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
Application.prototype.quitaThrobber=function(){
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
Vista.prototype.newVistaIndice=function(){
	if (app.vistaIndice){
		app.vistaIndice.toDOM()
	}
	else {
		var v=new VistaIndice()
		v.toDOM()
	}
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
Vista.prototype.newVistaCapitulo=function(capitulo, apartado){
	if (app.vistaCapitulo){
		app.vistaCapitulo.toDOM()
		app.vistaCapitulo.setCapitulo(capitulo, apartado)
	}
	else {
		var v=new VistaCapitulo(capitulo, apartado)
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
			creaObjProp('img', {src:'img/hetromb-home-fondo.png'})
		]}),

		creaObjProp('div', {className:'vista-body flexcontainer grid', hijos:[
			this.createHomeMenu('', 'Presentación', null, 				'presentacion'),
			this.createHomeMenu('', 'Índice',       this.newVistaIndice,'indice'),
			this.createHomeMenu('', 'Autores', null, 				 	'autores'),

			this.createHomeMenu('', 'Favoritos', null, 				 	'favoritos'),
			this.createHomeMenu('', 'Buscar', null, 				 	'buscar'),
			this.createHomeMenu('', 'Notas', null, 				 		'notas'),

			this.createHomeMenu('', 'Promueven', null, 				 	'promueven'),
		]}),

		creaObjProp('div', {className:'vista-bottom navbar-fixed', hijos:[
			creaObjProp('nav', {className:'nav-wrapper', hijos:[
				creaObjProp('ul', {className:'right', hijos:[
					this.createBottomBarMenu('info-outline icon-btn-legal'),
					this.createBottomBarMenu('comment icon-btn-comentar'),
					this.createBottomBarMenu('share icon-btn-compartir'),
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
VistaHome.prototype.createBottomBarMenu=function(icono, texto, extraCLS){
	return creaObjProp('li', {className:'bottom-menu'+(extraCLS?' '+extraCLS: ''), hijos:[
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
VistaIndice.prototype.clickExpandButton=function(event, dom){
	event.stopPropagation()

	var xdom=jQuery(dom)
	xdom.closest('.collection-item.capitulo').toggleClass('collapsed')
}
VistaIndice.prototype.clickStarButton=function(event, dom){
	event.stopPropagation()

	var xdom=jQuery(dom)
	xdom.closest('.collection-item.capitulo').toggleClass('starred')
}
VistaIndice.prototype.getCapituloForDom=function(dom){
	var xdom=jQuery(dom)
	var numCapitulo=xdom.closest('.collection-item.capitulo').data('cd')
	return app.state.data.capitulos[numCapitulo-1]
}
VistaIndice.prototype.creaDomSeccion=function(num, data){
	var self=this
	return creaObjProp('li', {'data-cd':data.cd, className:'seccion collection-item collapsed', onclick:function(){self.clickSeccion(event, this)}, hijos:[
		creaObjProp('span', {className:'titulo waves-effect', texto:num+'. '+data.ds}),
		creaObjProp('ul', {className:'collection capitulos', hijos:[]}),
	]})
}
VistaIndice.prototype.creaDomCapitulo=function(num, data){
	var self=this

	var l=[]
	for (var i in data.apartados){
		var apartado=data.apartados[i]
		l.push(creaObjProp('li', {texto:apartado.ds}))
	}

	return creaObjProp('li', {'data-cd':data.cd, className:'collection-item capitulo avatar collapsed', onclick:function(){self.clickCapitulo(event, this)}, hijos:[
		creaObjProp('i', {className:'material-icons circle star waves-effect waves-circle', mi:'star', onclick:function(){self.clickStarButton(event, this)},}),
			creaObjProp('span', {className:'capNumber', texto:'Capítulo '+data.cd}),
			creaObjProp('span', {className:'title', texto:data.ds}),

			creaObjProp('ul', {className:'apartados', hijos:l}),
			creaObjProp('p', {className:'autores', texto:data.autores}),
			
			creaObjProp('a', {className:'waves-effect waves-circle btn secondary-content', mi:'caret-down', onclick:function(){self.clickExpandButton(event, this)}, })
	]})
}
//--------------------------------------------------------------------------------

function VistaCapitulo(cap, apartado){
	this.id='VistaCapitulo'
	Vista.call(this)

	this.cap=cap
	this.apartado=apartado
	this.apartado=null

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
		creaObjProp('a', {mi:'star-outline', onclick:self.starChapter})
	]})

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
							creaObjProp('a', {mi:'arrow-left', onclick:self.previousChapter})
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'arrow-right', onclick:self.nextChapter})
						]}),
					]}),
					creaObjProp('ul', {className:'right', hijos:[
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'accounts'})
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'book'})
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'collection-pdf'})
						]}),
						creaObjProp('li', {hijos:[
							creaObjProp('a', {mi:'comment'})
						]}),
						this.domStar,
					]})
				]})
			]})
		]}),
	]
}
VistaCapitulo.prototype.tareasPostCarga=function(){
	this.setCapitulo(this.cap, this.apartado)
}
VistaCapitulo.prototype.setCapitulo=function(cap, apartado){
	this.cap=cap
	this.apartado=apartado || 0

	app.ponThrobber()
	jQuery(this.domTitle).text(this.cap.ds)
	jQuery(this.domSubTitle).text(this.cap.autores)

	var data=this.cap.apartados[this.apartado]
	jQuery(this.contenido).load( data.archivo, function() {
		app.quitaThrobber()
	})

	window.history.replaceState({vista:this.id}, this.id, '#'+this.id+'/'+this.cap.cd+'-'+this.apartado)
}
VistaCapitulo.prototype.starChapter=function(){
	jQuery(this.domStar).find('i').toggleClass('zmdi-star')
}
VistaCapitulo.prototype.previousChapter=function(){}
VistaCapitulo.prototype.nextChapter=function(){

}