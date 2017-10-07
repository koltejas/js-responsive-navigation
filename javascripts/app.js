'use strict'

// Import node modules.
import DocReady from 'es6-docready'
import $ from 'jquery'
import 'jquery-ui-bundle'
import Foundation from 'foundation-sites'

// Must wait until DOM is ready before initiating the modules.
DocReady(() => {
  console.log("DOM is ready. Let's party")
  $(document).foundation()

  // Define elements.
  var menuDropdown = $('.menu.dropdown')
  var menuAccordion = $('.menu.accordion-menu')

  // Clone the inner elements of ul.menu.dropdown.
  // var $clone = menuDropdown.clone(true, true) // .clone method will clone the styling too.
  var $clone = menuDropdown.html() // .html() method only copies the tags, not the styling
  menuAccordion.append($clone)

  // Creates a new instance of DropdownMenu.
  // https://foundation.zurb.com/sites/docs/dropdown-menu.html#js-class
  var elem = new Foundation.DropdownMenu(menuDropdown, {})

  // Creates a new instance of an accordion menu.
  // https://foundation.zurb.com/sites/docs/accordion-menu.html#js-class
  var elem = new Foundation.AccordionMenu(menuAccordion, {})

  // Overlay menu.
  var navOverlay = $('.nav-overlay')
  var buttonLaunch = $('.button-launch-overlay-menu')
  var buttonExit = $('.button-exit-overlay-menu')

  buttonLaunch.on('click', function () {
    navOverlay.addClass('is-open')
    return false
  })

  buttonExit.on('click', function () {
    navOverlay.removeClass('is-open')
    return false
  })

  // Get Z Foundation media query screen size.
  // http://foundation.zurb.com/sites/docs/javascript-utilities.html#mediaquery
  function getZFcurrentMediaQuery () {
    return Foundation.MediaQuery.current
  }

  window.addEventListener('resize', () => {
    var current = getZFcurrentMediaQuery()
    console.log('Screen size: ' + current)
  })

  // https://stackoverflow.com/questions/10328665/how-to-detect-browser-minimize-and-maximize-state-in-javascript
  document.addEventListener('visibilitychange', () => {
    console.log(document.hidden, document.visibilityState)
  }, false)
})
