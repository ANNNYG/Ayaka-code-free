export const homeElements = [
  // 节点
  {
    id: '1',
    type: 'title',
    position: { x: 300, y: 100 },
    class: '__title_node__',
    connectable: true
  },
  {
    id: '2',
    label: '画布式',
    type: 'canvas-type',
    position: { x: 100, y: 300 },
    class: '__canvas_node__ __base_node__'
  },
  {
    id: '3',
    label: '瀑布流',
    type: 'waterfalls-type',
    position: { x: 400, y: 400 },
    class: '__waterFalls_node__ __base_node__'
  },
  {
    id: '4',
    label: '网格式',
    type: 'grids-type',
    position: { x: 600, y: 250 },
    class: '__grids_node__ __base_node__'
  },

  // 线
  {
    id: 'e1-1',
    source: '1',
    target: '3',
    animated: true,
    style: { stroke: 'rgb(46, 163, 230)', 'stroke-width': '3px' }
  },
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    style: { stroke: 'rgb(228, 87, 151)', 'stroke-width': '3px' }
  },
  {
    id: 'e1-3',
    source: '1',
    target: '4',
    animated: true,
    style: { stroke: 'rgb(234, 102, 34)', 'stroke-width': '3px' }
  }
]
