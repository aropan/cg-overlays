// Feel free to send PR with other games settings.
const knownGames = {
    
    // Seabed security
    FC2023: {
        viewport: createViewport(
            (width = 10000),
            (height = 10000),
            (leftMargin = 4600),
            (rightMargin = 4600),
            (topMargin = 300),
            (bottomMargin = 500)
        ),
    },

    "Search Race": {
        viewport: createViewport((width = 16000), (height = 9000)),
    },

    CodersStrikeBack: {
        viewport: createViewport((width = 16000), (height = 9000)),
    },

    // Code Royal ¯\_(ツ)_/¯
    CodinGame: {
        viewport: createViewport((width = 1920), (height = 1080)),
    },

    CodeBusters: {
        viewport: createViewport(
            (width = 16000),
            (height = 9000),
            (leftMargin = 350),
            (rightMargin = 350),
            (topMargin = 220),
            (bottomMargin = 100)
        ),
    },

    OceanOfCode: {
        viewport: createViewport(
            (width = 900),
            (height = 900),
            (leftMargin = 510),
            (rightMargin = 510),
            (topMargin = 90),
            (bottomMargin = 90)
        ),
    },

    TheGreatEscape: {
        viewport: createViewportFromScreenshot(
            (fieldLogicalWidth = 900),
            (screenshotWidth = 1920),
            (fieldLeft = 522),
            (fieldTop = 166),
            (fieldRight = 1400)            
        ),
        playerStepEveryFrame: true,
    },

    GameOfDrones: {
        viewport: createViewport(
            (width = 4000),
            (height = 1800),
            (leftMargin = 300),
            (rightMargin = 300),
            (topMargin = 180),
            (bottomMargin = 180)
        ),
        playerStepEveryFrame: true,
    },

    // Crystal Rush
    UTG2019: {
        viewport: createViewportFromScreenshot(
            (fieldLogicalWidth = 3000),
            (screenshotWidth = 16000),
            (fieldLeft = 610),
            (fieldTop = 1240),
            (fieldRight = 15820)
        ),
    },

    SpaceShooter: {
        viewport: createViewportFromScreenshot(
            (fieldLogicalWidth = 1700),
            (screenshotWidth = 1920),
            (fieldLeft = 0),
            (fieldTop = 0),
            (fieldRight = 1700)
        ),
    }


};

function createViewport(
    width,
    height,
    leftMargin = 0,
    rightMargin = 0,
    topMargin = 0,
    bottomMargin = 0
) {
    return {
        left: -leftMargin,
        top: -topMargin,
        right: width + rightMargin,
        bottom: height + bottomMargin,
        fieldWidth: width,
        fieldHeight: height,
    };
}

// 1. Take screenshot of the full screen visualizer.
// 2. Open it in some image editor.
// 3. Find the game field corners coordinates in the screenshot.
// 4. Decide the desired logical field width.
// 5. Put all these data into this function.
// Or use hold-CTRL key feature in visualizer (and use 16000 for screenshotWidth)
function createViewportFromScreenshot(
    fieldLogicalWidth,
    screenshotWidth,
    fieldLeft,
    fieldTop,
    fieldRight
) {
    let fieldXFraction = (fieldRight - fieldLeft) / screenshotWidth;
    let screenLogicalWidth = fieldLogicalWidth / fieldXFraction;
    let screenLogicalHeight = (screenLogicalWidth * 9) / 16;
    let scale = screenLogicalWidth / screenshotWidth;
    let logicalLeft = fieldLeft * scale;
    let logicalTop = fieldTop * scale;
    let logicalRight = screenLogicalWidth - logicalLeft;
    let logicalBottom = screenLogicalHeight - logicalTop;
    return {
        left: -logicalLeft,
        top: -logicalTop,
        right: logicalRight,
        bottom: logicalBottom,
        fieldWidth: fieldLogicalWidth,
        fieldHeight: (fieldLogicalWidth * 9) / 16,
    };
}
