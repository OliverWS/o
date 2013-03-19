
//March 6th 2013
NYTD.jQuery('#overlay').css('height','0px')
NYTD.jQuery('#gatewayCreative').css('height','0px')
NYTD.jQuery('body').css('overflow','auto')
NYTD.jQuery('#gatewayUnit').remove()
NYTD.jQuery('html').css('overflow','auto')


try {
  //August 10th update:
  new Ajax.Updater('shell', window.location.href.replace(/gwh=.*/,""));
} catch (e) {
  //Fail silently
}
