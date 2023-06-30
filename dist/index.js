"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const DoubleLinkedList_1 = __importDefault(require("./DoubleLinkedList"));
const LinkedList_1 = __importDefault(require("./LinkedList"));
const Node_1 = __importDefault(require("./Node"));
const SingleLinkedList_1 = __importDefault(require("./SingleLinkedList"));
exports.default = {
  LinkedList: LinkedList_1.default,
  Node: Node_1.default,
  DoubleLinkedList: DoubleLinkedList_1.default,
  SingleLinkedList: SingleLinkedList_1.default,
};
