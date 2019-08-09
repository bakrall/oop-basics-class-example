/* the below simplified code is to demonstrate how to pass single value to a Class, 
in case we have a group of elements. It is useful for example when we have several expanders on a page,
and we want to isolate their behaviour (ie. clicking on one expander opens only one of them, not all) */

class Child {
	constructor(child) {
		this.$child = child;
		this.bindUiEvents();
	}

	bindUiEvents() {
		$(this.$child).on('click', this.addStyles);
	}

	addStyles() {
		$(this).addClass('coloured');
	}
}

const buttons = $('.child');

buttons.each(function(index, item) {
	new Child(item);
})