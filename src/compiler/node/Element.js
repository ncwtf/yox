
import Node from './Node'

import * as nodeType from '../nodeType'
import * as array from '../../util/array'
import * as object from '../../util/object'

/**
 * 元素节点
 *
 * @param {string} name
 * @param {string} component
 */
export default class Element extends Node {

  constructor(name, component) {
    super(nodeType.ELEMENT)
    this.name = name
    this.component = component
    this.attrs = [ ]
    this.directives = [ ]
  }

  addAttr(node) {
    this.attrs.push(node)
  }

  addDirective(node) {
    this.directives.push(node)
  }

  getAttributes() {
    let result = { }
    array.each(
      this.attrs,
      function (node) {
        result[node.name] = node.getValue()
      }
    )
    return result
  }

  render(data) {

    let instance = this
    let { name, component, attrs, directives } = instance
    let node = new Element(name, component)
    node.keypath = data.keys.join('.')
    data.parent.addChild(node)

    let { addDeps } = data

    let deps = [ ]
    let nextData = {
      parent: node,
      addDeps: function (childrenDeps) {
        array.push(deps, childrenDeps)
      }
    }

    nextData = object.extend({ }, data, nextData)
    instance.renderChildren(nextData, attrs)
    instance.renderChildren(nextData, directives)
    instance.renderChildren(nextData)

    addDeps(deps)
    node.deps = deps

  }

}
