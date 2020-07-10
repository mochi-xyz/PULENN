basic.forever(function () {
    if (TFabConnectBeta.readValue("switch") == 0) {
        plenbit.stdMotion(plenbit.StdMotions.HighFive)
    }
    if (TFabConnectBeta.readValue("switch") == 1) {
        plenbit.stdMotion(plenbit.StdMotions.Hug)
    }
    if (TFabConnectBeta.readValue("switch") == 2) {
        plenbit.stdMotion(plenbit.StdMotions.AHem)
    }
})
