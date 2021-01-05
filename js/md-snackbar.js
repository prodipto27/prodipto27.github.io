function showSnackbar(text, actionText){
    const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = text;
    snackbar.actionButtonText = actionText;
    snackbar.open();
}