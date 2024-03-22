class Toast {
  private static getElements() {
    const toast = document.querySelector('#toast') as Element;
    const title = toast?.querySelector('#toast-title') as Element;
    const text = toast?.querySelector('#toast-text') as Element;
    return { toast, title, text };
  }

  private static show(color: string, title: string, text?: string) {
    Toast.clean();
    setTimeout(() => {
      const { toast } = Toast.getElements();
      Toast.setContent(title, text);
      toast?.classList.add(color);
      toast?.classList.add('visible');
    });
  }

  private static clean() {
    const { toast } = Toast.getElements();
    toast?.classList.remove('visible');
    toast?.classList.remove('success');
    toast?.classList.remove('error');
    toast?.classList.remove('info');
    Toast.setContent('', '');
  }

  private static setContent(newTitle: string, newText?: string) {
    const { text, title } = Toast.getElements();
    title.innerHTML = newTitle;
    text.innerHTML = newText || '';
  }

  public close() {
    Toast.clean();
  }

  public success(title: string, text?: string) {
    Toast.show('success', title, text);
  }

  public error(title: string, text?: string) {
    Toast.show('error', title, text);
  }

  public info(title: string, text?: string) {
    Toast.show('info', title, text);
  }
}

export const toast = new Toast();
