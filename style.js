(function (blink) {
	'use strict';

	var santillana_inglesStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	santillana_inglesStyle.prototype = {
		bodyClassName: 'content_type_clase_santillana_ingles',
		ckEditorStyles: {
			name: 'santillana_ingles',
			styles: [
				
				{ name: 'Objetivo', element: 'h3', attributes: { 'class': 'bck-title9'} },
				{ name: 'Título azul Math', element: 'h3', attributes: { 'class': 'bck-title17'} },
				{ name: 'Título verde Science', element: 'h3', attributes: { 'class': 'bck-title5'} },
				{ name: 'Título morado Social', element: 'h3', attributes: { 'class': 'bck-title11'} },
				{ name: 'Título 2 morado Social', element: 'h3', attributes: { 'class': 'bck-title3'} },
				{ name: 'Título 3 naranja Social', element: 'h3', attributes: { 'class': 'bck-title25'} },
				{ name: 'Título Actividades Social', element: 'h3', attributes: { 'class': 'bck-title36'} },
				{ name: 'Título Workshop', element: 'h3', attributes: { 'class': 'bck-title10'} },
				{ name: 'Título 2 gris Science', element: 'h3', attributes: { 'class': 'bck-title8'} },
				{ name: 'Título Science Lab', element: 'h3', attributes: { 'class': 'bck-title16'} },

										
				{ name: 'Énfasis Gris', element: 'span', attributes: { 'class': 'bck-gris'} },
				{ name: 'Énfasis Naranja', element: 'span', attributes: { 'class': 'bck-enfasis'} },
				{ name: 'Énfasis Fondo', element: 'span', attributes: { 'class': 'bck-enfasis-naranja'} },
				{ name: 'Versalitas', element: 'span', attributes: { 'class': 'bck-versalitas'} },


				{ name: 'Lista Ordenada', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Azul Math', element: 'ol', attributes: { 'class': 'bck-ol-10' } },
				{ name: 'Lista Letra Math', element: 'ol', attributes: { 'class': 'bck-ol-6' } },
				{ name: 'Lista Morada Social', element: 'ol', attributes: { 'class': 'bck-ol-7' } },
				{ name: 'Lista Letra Social', element: 'ol', attributes: { 'class': 'bck-ol-8' } },
				{ name: 'Lista Verde Science', element: 'ol', attributes: { 'class': 'bck-ol-4' } },
				{ name: 'Lista Letra Science', element: 'ol', attributes: { 'class': 'bck-ol-5' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista naranja', element: 'ol', attributes: { 'class': 'bck-ol-3' } },
				{ name: 'Lista roja', element: 'ol', attributes: { 'class': 'bck-ol-9' } },
				{ name: 'Lista azul', element: 'ol', attributes: { 'class': 'bck-ol-11' } },
				{ name: 'Lista morada', element: 'ol', attributes: { 'class': 'bck-ol-12' } },
				{ name: 'Lista verde', element: 'ol', attributes: { 'class': 'bck-ol-13' } },
				

				{ name: 'Lista Desordenada defecto', element: 'ul', attributes: { 'class': 'bck-ul-6'} },
				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Des verde', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Des morada', element: 'ul', attributes: { 'class': 'bck-ul-4'} },
				{ name: 'Lista Des roja', element: 'ul', attributes: { 'class': 'bck-ul-5'} },
				{ name: 'Lista Desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				
				
				
				{ name: 'Caja Bocadillo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-1' } },
				{ name: 'Caja Gris', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-2' } },
				{ name: 'Caja BordAzul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-7' } },
				{ name: 'Caja Naranja', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-9' } },
				{ name: 'Caja BordGris', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-12' } },
				{ name: 'Caja Work Picture', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-14' } },
				{ name: 'Caja Investigate', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-8' } },
				{ name: 'Caja BordeAzul', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-13' } },
				{ name: 'Semáforo Atención', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-4' } },
				{ name: 'Semáforo Extrañado', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-10' } },
				{ name: 'Semáforo Pensante', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-6' } },
				{ name: 'Semáforo Saludo', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box-3' } },

				
				{ name: 'Tabla naranja', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table'} },
				{ name: 'Tabla verde', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-2'} },
				{ name: 'Tabla azul', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-3'} },
				{ name: 'Celda naranja', element: 'td', attributes: { 'class': 'bck-td-1'} },
				{ name: 'Celda azul', element: 'td', attributes: { 'class': 'bck-td-2' } },
				{ name: 'Celda verde', element: 'td', attributes: { 'class': 'bck-td-3' } },

				{ name: 'Desplegable', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'santillana_ingles-dropdown' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'santillana_ingles-dropdown-2' } },
				
				{ name: 'Math in daily', element: 'span', attributes: { 'class': 'icon icon-9'} },
				{ name: 'Math Skills', element: 'span', attributes: { 'class': 'icon icon-10'} },
				{ name: 'Social responsibility', element: 'span', attributes: { 'class': 'icon icon-11'} },
				{ name: 'Connect', element: 'span', attributes: { 'class': 'icon icon-12'} },
				{ name: 'Writing Skills', element: 'span', attributes: { 'class': 'icon icon-13'} },
				{ name: 'Cultural', element: 'span', attributes: { 'class': 'icon icon-14'} },
				{ name: 'Icono Step 1', element: 'span', attributes: { 'class': 'icon icon-1' } },
				{ name: 'Icono Step 2', element: 'span', attributes: { 'class': 'icon icon-2' } },
				{ name: 'Icono Step 3', element: 'span', attributes: { 'class': 'icon icon-3' } },
				{ name: 'Icono Step3 Rojo', element: 'span', attributes: { 'class': 'icon icon-16' } },
				{ name: 'Icono Step 4', element: 'span', attributes: { 'class': 'icon icon-4' } },
				{ name: 'Icono Step 5', element: 'span', attributes: { 'class': 'icon icon-5' } },
				{ name: 'Icono Step 6', element: 'span', attributes: { 'class': 'icon icon-6' } },
				{ name: 'Icono Step 7', element: 'span', attributes: { 'class': 'icon icon-7' } },
				{ name: 'Icono Step 8', element: 'span', attributes: { 'class': 'icon icon-8' } },
				{ name: 'Icono Step 9', element: 'span', attributes: { 'class': 'icon icon-15' } }

			]
		},
		slidesTitle: {},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			this.addActivityTitle();
			this.fillSlidesTitle();
			this.formatCarouselindicators();
			this.animateNavbarOnScroll();
			this.addSlideNavigators();
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},
		
		
		configEditor: function (editor) {
		editor.dtd.$removeEmpty['span'] = false;
		},
		

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		formatCarouselindicators: function () {
			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li');
			var firstSlide = eval('t0_slide');
			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<span class="sectionTitle"></span>' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			$navbarBottom.find('li').tooltip('destroy');

			var navigatorIndex = 0;

			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title.replace(/<span class="index">[\d]+<\/span>/g, ''),
					textIndice = stripHTML(slideTitle),
					clase = '';

				if (slide.isConcatenate) continue;

				if (slide.seccion) {
					clase = (slide.seccion == 'taller') ? ('fa fa-edit') : ('fa fa-check');
				}

				dropDown += '<li role="presentation"><a role="menuitem"></span> <span class="title">' + textIndice + '</span></a></li>';

				navigatorIndex++;
			};

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'santillana_ingles-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator" class="hidden"/>')
					.end()
				.find('.dropdown')
					.find('li')
						.on('click', function (event) {
							$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
						});

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			})

			blink.events.on('section:shown', function() {
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) + '_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
			});

			var curso = blink.getCourse(idcurso);
			curso.done(function () {
				var units = curso.responseJSON.units;
				var number = 0;
				var dropDownTemas = '' +
					'<div class="dropdownTemas">' +
						'<button id="tLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<h2><span id="courseIndex"></span>' +
								'<div id="nombre-tema-wrapper">' +
									'</span><span id="nombre-tema">' + blink.courseInfo.unit + '<span class="caret"></span></span>' +
									'<a href="#" id="goTo-indice">' + text_web.slide_volver_indice + '</a>' +
								'</div>' +
							'</h2>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="tLabel">';

				for (var i in units) {
					var title = units[i].title;
					if (title && units[i].subunits.length) { //Si el tema tiene actividades
						dropDownTemas += '' +
							'<li role="presentation" class="lista-temas" data-url="' + units[i].subunits[0].url + '">' +
								'<span>'+ units[i].number + '</span><a role="menuitem">' + title + '</a>' +
							'</li>'
						if (title == blink.courseInfo.unit) number = units[i].number;
					}
				}

				dropDownTemas += '' +
						'</ul>' +
					'</div>';

				$('.dropdown')
					.before(dropDownTemas)
					.end()
					.find('#courseIndex').text(number);

				$('.lista-temas').click(function() {
					redireccionar($(this).data('url'));
				})

				$('#goTo-indice').click(function(event) {
					event.stopPropagation();
					return showCursoCommit();
				});
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}


			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			var $navigator = $('<div class="navigator"><div class="main-navigator"><div class="left"></div><div class="right"></div></div></div>'),
				$leftControl = $('.left.slider-control').clone(),
				$rightControl = $('.right.slider-control').clone();

			var self = this.slidesTitle;

			var esdeber = blink.activity.esdeber;

			$leftControl.add($rightControl).find('span').remove();

			var slideIndex = 0; // se utiliza como indice para saltarnos los concatenados en el each
			var slidesNav = $('.item-container');
			// Filtramos para que solo coja las slides que no son final slide para iterar sobre ellas
			slidesNav = slidesNav.filter(function(element){
				if ($(slidesNav[element]).find('#final').length > 0) {
					return false;
				}
				return true;
			});

			slidesNav.each(function (index, element) {
				var $itemNavigator = $navigator.clone(),
					$left, $right, hasLeft = false;

				var prevSlide,
					prevIndex = slideIndex-1;
				// si  hay una slide anterior se recorre hacia atras hasta que no haya concatenados
				// si estoy en la slide 0 no se pinta
				while(prevIndex>=0){
					prevSlide = window['t'+ prevIndex +'_slide'];
					if(!esdeber && prevSlide.isConcatenate){
						prevIndex--;
					}
					else{
						$left = $leftControl.clone();
						$left.append('<span class="title">'+self['t'+prevIndex+'_slide']+'</span>');
						$itemNavigator.find('.left').append($left);
						hasLeft = true;
						break;
					}
				}

				slideIndex++;
				var nextSlide;
				// si  hay una slide siguiente se recorre hacia adelante hasta que no haya concatenados
				// si estoy en la slide ultima no se pinta boton next
				while(slideIndex<window.secuencia.length){
					nextSlide = window['t'+ slideIndex +'_slide'];
					if(!esdeber && nextSlide.isConcatenate){
						slideIndex++;
					}
					else{
						$right = $rightControl.clone();
						$right.prepend('<span class="title">'+self['t'+slideIndex+'_slide']+'</span>');
						$itemNavigator.find('.right').append($right);
						hasLeft && $right.parent('.right').addClass('separator');
						break;
					}
				}
				$(element).append($itemNavigator);
			});

			$('.navigator')
				.on('click', '.left.slider-control', function () {
					blink.activity.showPrevSection();
				})
				.on('click', '.right.slider-control', function () {
					blink.activity.showNextSection();
				});
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		},

		animateNavbarOnScroll: function () {
			if (!blink.isApp) return;
			var $navbar = $('.santillana_ingles-navbar');
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},
                
                changeHighBar: function () {
                    if($('.santillana_ingles-navbar').length>0 && $('.navbar').length>0){
                        blink.theme.setTopByHeight('.navbar', '.santillana_ingles-navbar');
                    }
                }
	};

	santillana_inglesStyle.prototype = _.extend({}, new blink.theme.styles.basic(), santillana_inglesStyle.prototype);

	blink.theme.styles['santillana_ingles'] = santillana_inglesStyle;

})( blink );
