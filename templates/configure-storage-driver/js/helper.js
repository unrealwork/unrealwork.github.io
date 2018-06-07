function updateViewButton(toggleJqObject, viewJqObject, href, paramName) {
	var selectedIndex = toggleJqObject.val();
	if (selectedIndex === 0) {
		viewJqObject.attr({
			href: href,
			title:'Add'
		});
	} else {
		viewJqObject.attr({
			href: href + '?' + paramName + '=' + selectedIndex,
			title:'View'
		});
	}
}

function updateCollectionViewButton() {
	updateViewButton($("#entitySet"), $('#collectionView'), '/collection/form.xhtml', 'collectionId');
}

function updateConnectionPoolViewButton() {
	updateViewButton($("#connectionPoolConfig"), $('#connectionPoolView'), '/pool/form.xhtml', 'connectionPoolId');
}

function updateAtsdConfigurationViewButton() {
	updateViewButton($("#atsdConfiguration"), $('#atsdConfigurationView'), '/atsd/form.xhtml', 'atsdId');
}

function updateEntityLookupViewButton() {
	updateViewButton($("#entityLookup"), $('#entityLookupView'), '/entity-lookup/form.xhtml', 'entityLookupId');
}

function updateDatabaseConfigurationViewButton() {
	updateViewButton($("#databaseConfiguration"), $('#databaseConfigurationView'), '/jdbc/form.xhtml', 'dataSourceId');
}

function updateKafkaConsumerConfigurationViewButton() {
	updateViewButton($("#consumerConfiguration"), $('#consumerConfigurationView'), '/kafka/form.xhtml', 'consumerId');
}

function refreshCombobox(input_data, select, url) {
	if (url === undefined) {
		url = $(location).attr('pathname');
	}
	$.ajax({
		url: url,
		data: input_data,
		type: 'POST'
	}).done(function(data) {
        var selected = select.val();
        select.empty();
        select.append($('<option>').text('None').attr('value', ''));
        $.each(data, function(key, value) {
            select.append($('<option>').text(value).attr('value', key));
        });
        select.val(selected);
	});
}

/*
	If predicate is true, elements found by selectors in idListToShow will be shown on page,
	and ones from idListToHide will be hidden; if false -- otherwise.
 */
function toggleOptions(predicate, idListToShow, idListToHide) {
	var selectorToShow = idListToShow.join(',');
	var selectorToHide = idListToHide.join(',');
	if (predicate) {
		$(selectorToShow).show();
		$(selectorToHide).hide();
	} else {
		$(selectorToShow).hide();
		$(selectorToHide).show();
	}
}

function checkWebDriver() {
	toggleOptions($('#enableWebDriver1').prop('checked'),
		['#driverScriptRow', '#driverTimeoutRow', '#driverFileEncodingRow'],
		[])
}

function complement(subSet, fullSet) {
    return fullSet.filter(function(i) {return subSet.indexOf(i) < 0;});
}

/*
 * Factory to create methods to show/hide rows on specific events.
 * all : list of all active rows
 * config : key to list of hidden rows mapping
 */
function toggleOptionsFactory(all, config, reverse) {
    if (reverse === true) {
        return function(option) {
            var toHide = config[option];
            return toggleOptions(true, complement(toHide, all), toHide);
        }
    } else {
        return function (option) {
            var toShow = config[option];
            return toggleOptions(true, toShow, complement(toShow, all));
        }
    }
}

function checkLicense() {
    var result;
    $.ajax({
        async: false,
    	url: '/admin/license.xhtml',
        data: 'check',
        type: 'GET',
        success: function(data) {
        	if (data) {
        		result = confirm('Are you sure?');
        	} else {
        		alert("License is invalid");
        		result = false;
        	}
        },
        error: function() {
            alert('Error occured');
            result = false;
        }
    });
    return result;
}

function initializeCodeMirror(editorHolderNode, css, mode, isFocused, extraOptions, resizable){
	var newHeight = editorHolderNode.scrollHeight;
	var $editorHolderNode = $(editorHolderNode);
	var editorMode = mode || 'text/x-sql';

	if (newHeight > $editorHolderNode.css('maxHeight'))
		newHeight = $editorHolderNode.css('maxHeight');
	if (newHeight < $editorHolderNode.css('minHeight'))
		newHeight = $editorHolderNode.css('minHeight');

	$editorHolderNode.height(0).height(newHeight);
	var options = {
		mode: editorMode,
		indentUnit: 4,
		matchBrackets: true,
		lineWrapping: true,
		autoCloseBrackets: true,
		autofocus: (isFocused === undefined ? true : isFocused),
		extraKeys: {"Ctrl-Space": "autocomplete"}
	};
	if (extraOptions instanceof Object) {
		$.each(extraOptions, function(key, value) {
			options[key] = value;
		})
	}	
	var editor = CodeMirror.fromTextArea(editorHolderNode, options);
	var editorNode = $(editor.getWrapperElement());
	css.height = css.height || newHeight + "px"; // padding and border
	editorNode.css(css);
    var resizableVal = resizable === undefined ? true : resizable;
    if (resizableVal) {
        editorNode.resizable({
            resize: function () {
                editor.setSize($(this).width(), $(this).height());
            },
            handles: "se",
            cursor: "default"
        });
    }
	var br = editorNode.next();
	if (br.prop('tagName') === 'BR') {
		br.remove(); // remove odd <br> tag
	}
    editorNode.attr("tabindex", "-1");
	var nativeEditorNode = editorNode.find('textarea').get()[0];
	nativeEditorNode.selectionStart = nativeEditorNode.textContent.length;
	nativeEditorNode.selectionEnd = nativeEditorNode.textContent.length;
	return editor;
}

function buildResizableTextareas(editor, minHeight, mode) {
    var codeMirrorFormStyle;
    $.each(editor, function(index, value) {
        codeMirrorFormStyle = {
            minWidth: value.offsetWidth,
            maxWidth: "100%",
            width: "100%",
            minHeight: minHeight,
            height: "auto",
			boxSizing: "border-box"
        };
        initializeCodeMirror(value, codeMirrorFormStyle, mode, false, {viewportMargin: Infinity}, false);
    });
}

function activateCronHelpers(){
	var $cronExpression = $("#cronExpression");
	var $cronExpressionParent = $cronExpression.parent();
	$cronExpressionParent.css("position", "relative");
	$cronExpressionParent.on("click", "a", function(){
		$cronExpression.val($(this).data("value"));
	});
}

function createDocumentationNode(title, content) {
	return '<a href="javascript:void(0)" class="popup-marker" rel="popover" title=""' +
		' data-original-title="' + title + '" data-content="' + content + '" data-html="true">' +
		title + '</a>';
}

function fillDocumentationNode($selector, documentationString) {
	$selector.html(createDocumentationNode($selector.text(), documentationString.replace(/"/g, "&quot;")));
	$selector.find('.popup-marker').popover();
	return $selector
}

/*
 Take page documentation object from tooltip-data.js, search for existing selectors on page and
 create documentation tooltips, if found. TooltipData keys are usually ids of data inputs
 */
function fillTooltipsOnPage(tooltipData) {
	$.each(tooltipData, function(key, value) {
		if (key.startsWith('#')) {
			var popupNode = $(key).parent().prev();
			fillDocumentationNode(popupNode, value);
		} else {
			$(key).each(function () {
				var popupNode = $(this);
				fillDocumentationNode(popupNode, value);
			});
		}
	});
}

/*
 Take page documentation object from tooltip-data.js, search for existing selectors on page and
 create documentation tooltips, if found. Use this function of fillTooltipsOnPage when one tooltip describes meaning of
 several inputs in a row. TooltipData keys are row identifiers, and values are lists of descriptions of inputs in the row.
 */
function fillRowTooltipsOnPage(tooltipData) {
	$.each(tooltipData, function(key, value) {
		var $popupNode = $(key).find('>td:first');
		fillDocumentationNode($popupNode, value);
	});
}

function bootstrap_alert(str) {
    var $alertDiv = $('#alert');
    if ($alertDiv.length === 0) {
        $alertDiv = $('<div id="alert" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true"/>');
        $('<div class="modal-body"/>')
            .appendTo($alertDiv)
            .append($('<h4 id="alert-message">'));
        $('<div class="modal-footer alert"/>')
            .appendTo($alertDiv)
            .append($('<button class="btn" data-dismiss="modal" aria-hidden="true">OK</button>'));
    }
    $alertDiv.find('#alert-message').html(str);
    $alertDiv.modal({
		show: true,
		backdrop: true
	});
	return false;
}

function validateCheckboxes($checkboxes, noDataMessage, noSelectedMessage) {
	if ($checkboxes.length === 0)
		return bootstrap_alert(noDataMessage);
	var checkedCheckboxes = $checkboxes.filter($(':checked'));
	if (checkedCheckboxes.length === 0)
		return bootstrap_alert(noSelectedMessage);
	return true;
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

/*
	Highlight content without creating a CodeMirror editor.
	Arguments:
		selectorEl: Collection of Node objects (or jQuery object, since they return Nodes while iterating on them). Usually <pre/> tag.
		mode: string representing Codemirror mode based on used language. Default is one for ATSD network commands.
 */
function highlightInline(selectorEl, mode) {
	var text;
	if (!selectorEl.length)
		return;
	$.each(selectorEl, function(index, element){
		text = element.textContent;
        hljs.highlightBlock(element);
	});
}

/*function prettyJson(obj) {
	return JSON.stringify(obj, null, 3)
		.replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
		.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}*/

/*
	Highlight and beautify JSON content
	Arguments:
		selectorEl: Collection of Node objects or jQuery object (same as in highlightInline function)
 */
/*function highlightJsonInline(selectorEl) {
	var text;
	if (!selectorEl.length)
		return;
	$.each(selectorEl, function(index, element){
		text = element.textContent;
		try {
			text = prettyJson(JSON.parse(element.textContent));
		} catch(SyntaxError) {
			text = element.textContent;
		} finally {
		  var v = replaceEscapedHtmlTags(text);
			CodeMirror.runMode(v, 'application/json', element);
		}
	});
}*/

/*
	Shorten given path to maxSize number of characters. If path length exceeds maxSize, parts of path
	between path separators will be substituted by dots. Algotithm tries to find the longest generated path
	not exceeding maxSize.
	Arguments:
		path: string representation of path
		maxSize: maximum allowed number of characters in result string
	Returns:
		if path.length <= maxSize, then path input path is returned,
		otherwise: jquery object containing DIV tag with generated path as text and input path as tooltip.
 */
function truncateInMiddle(path, maxSize) {
	var updateBest = function(pathPart, target, i, j, best) {
		if (pathPart < best.size && target <= pathPart) {
			best.size = pathPart;
			best.i = i;
			best.j = j;
		}
	};
	var countBest = function(parts, target) {
		var length = parts.length;
		var matrix = new Array(length);
		for (var k = 0; k < length; ++k) {
			matrix[k] = new Array(length);
		}
		var i = 0;
		var pathPart = parts[0].length;
		matrix[i][i] = pathPart;
		var best = {i: -1, j: 0, size: Infinity};

		for (i = 0; i < length; ++i) {
			pathPart = parts[i].length;
			matrix[i][i] = pathPart;
			updateBest(pathPart, target, i, i, best);
			for (var j = i - 1; j >= 0; --j) {
				pathPart = matrix[i-1][j] + matrix[i][i] + 1;
				matrix[i][j] = pathPart;
				updateBest(pathPart, target, i, j, best);
			}
		}
		return best;
	};

	var sizeToOutput = path.length;
	if (sizeToOutput <= maxSize) {
		return path;
	}
	var parts = path.split('/');
	if (parts.length > 4) {
		var target = sizeToOutput - maxSize;
		var cuttableParts = parts.slice(3, parts.length -1);
		var bestToCut = countBest(cuttableParts, target);
		if (bestToCut.i > 0) {
			cuttableParts.splice(bestToCut.j, bestToCut.i - bestToCut.j + 1, '..');
			cuttableParts.unshift(path.substring(0, path.indexOf(parts[3]) - 1));
			cuttableParts.push(parts[parts.length -1]);
			return $('<div>').attr('title', path).html(cuttableParts.join('/'));
		}
	}
	return path;
}

function substituteExtraSubpathWithDots($elements, maxSize) {
    $.each($elements, function(index, elem){
        var $elem = $(elem);
        $elem.html(truncateInMiddle($elem.text(), maxSize));
    });
}

function setCursorWait() {
    $('body').css('cursor', 'wait');
}

function replaceEscapedHtmlTags(str) {
  var tagsToReplace = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>'
  };
  return str.replace(/&(:?amp|lt|gt);/g, function(tag) {
      return tagsToReplace[tag] || tag;
  });
}

function inArray(element, array) {
    return $.inArray(element, array) != -1;
}

function hasWhiteSpace(s) {
	return /\s/g.test(s);
}

function showHidePassword($this) {
    var input = document.getElementById('password');
    var isPassword = input.getAttribute('type') === 'password';
    input.setAttribute('type', isPassword ? 'text' : 'password');
    $this.text(isPassword ? 'Hide' : 'Show');
}