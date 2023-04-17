

// ------------ 👎😡 Example 1.1 bad approach ------------

interface AutoSet {
  getTeslaSet(): any;
  getAudiSet(): any;
  getBmwSet(): any;
}

class TeslaB implements AutoSet {
  getTeslaSet(): any { };
  getAudiSet(): any { };
  getBmwSet(): any { };
}

class AudiB implements AutoSet {
  getTeslaSet(): any { };
  getAudiSet(): any { };
  getBmwSet(): any { };
}

class BmwB implements AutoSet {
  getTeslaSet(): any { };
  getAudiSet(): any { };
  getBmwSet(): any { };
}


// ------------ 👍😊 Example 1.2 good approach ------------

interface TeslaSet {
  getTeslaSet(): any;
}

interface AudiSet {
  getAudiSet(): any;
}

interface BmwSet {
  getBmwSet(): any;
}

class Tesla implements TeslaSet {
  getTeslaSet(): any { };
}

class Audi implements AudiSet {
  getAudiSet(): any { };
}

class Bmw implements BmwSet {
  getBmwSet(): any { };
}
