// ===============================================================================
// Setup
// --------------------------------------------------------------------------------

const gui = new dat.GUI()

// width
gui.width = 350

// Parameters must be objects
const customConfig = {
  boolean: false,
  a: 0,
  b: 0,
  c: 0,
  d: {
    d1: 0,
  },
  color: 0xffffff
}

// adding directly to gui
gui.add(customConfig, "a", 0, 10, 0.01)

// creating a folder
const folder = gui.addFolder("folder")
folder.open()

// adding to a folder
folder.add(customConfig.d, "d1", 0, 10, 0.01)

// ================================================================================


// ================================================================================
// Events / callbacks
// --------------------------------------------------------------------------------

// boolean
gui.add(customConfig, "boolean")

// color
gui.addColor(customConfig, "color").onChange(() => material.color.set(customConfig.color))

// on update
gui.add(customConfig, "b", 0, 10, 0.01).onChange(() => {
  console.log("on update callback")
})

// on complete
gui.add(customConfig, "b", 0, 10, 0.01).onFinishChange(() => {
  console.log("on complete callback")
})

// select box on complete
gui
  .add(customConfig, "c", {
    option1: 0,
    option2: 0,
    option3: 0,
  })
  .onFinishChange(() => {
    console.log("on option select finish")
  })

// ================================================================================
