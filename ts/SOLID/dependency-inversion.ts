

// ------------ 👎😡 Example 1.1 bad approach ------------
class xmlHttpRequestServiceB {}

// Low level
class xmlHttpServiceB extends xmlHttpRequestServiceB {
  request(url: string, type: string) { }
}

// High level module
class HttpB {
  constructor(private xmlHttpService: xmlHttpService) { }

  get(url: string, options: any) {
    this.xmlHttpService.request(url, 'GET');
  }

  post(url: string) {
    this.xmlHttpService.request(url, 'POST');
  }
}







// ------------ 👍😊 Example 1.2 good approach ------------
class xmlHttpRequestService {
  open() { }
  send() { }
}

interface Connection {
  request(url: string, options: any): any;
}

// Low level
class xmlHttpService implements Connection {
  xhr = new xmlHttpRequestService();

  request(url: string, type: string) {
    this.xhr.open();
    this.xhr.send();
  }
}

// High level module
class Http {
  constructor(private httpConnection: Connection) { }

  get(url: string, options: any) {
    this.httpConnection.request(url, 'GET');
  }

  post(url: string) {
    this.httpConnection.request(url, 'POST');
  }
}
