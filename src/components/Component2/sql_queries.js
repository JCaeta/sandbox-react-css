import { riskAssessment1 } from "../Data/RiskAssessment/ra1";
import { riskAssessment2 } from "../Data/RiskAssessment/ra2";
import { riskAssessment3 } from "../Data/RiskAssessment/ra3";
import { riskAssessment4 } from "../Data/RiskAssessment/ra4";
import { riskAssessment5 } from "../Data/RiskAssessment/ra5";
import { riskAssessment6 } from "../Data/RiskAssessment/ra6";
import { riskAssessment7 } from "../Data/RiskAssessment/ra7";
import { riskAssessment8 } from "../Data/RiskAssessment/ra8";
import { riskAssessment9 } from "../Data/RiskAssessment/ra9";
import { riskAssessment10 } from "../Data/RiskAssessment/ra10";
import { riskAssessment11 } from "../Data/RiskAssessment/ra11";
import { riskAssessment12 } from "../Data/RiskAssessment/ra12";
import { riskAssessment13 } from "../Data/RiskAssessment/ra13";
import { riskAssessment14 } from "../Data/RiskAssessment/ra14";
import { riskAssessment15 } from "../Data/RiskAssessment/ra15";
import { riskAssessment16 } from "../Data/RiskAssessment/ra16";
import { riskAssessment17 } from "../Data/RiskAssessment/ra17";
import { riskAssessment18 } from "../Data/RiskAssessment/ra18";
import { riskAssessment19 } from "../Data/RiskAssessment/ra19";
import { riskAssessment20 } from "../Data/RiskAssessment/ra20";
import { riskAssessment21 } from "../Data/RiskAssessment/ra21";
import { riskAssessment22 } from "../Data/RiskAssessment/ra22";
import { riskAssessment23 } from "../Data/RiskAssessment/ra23";
import { riskAssessment24 } from "../Data/RiskAssessment/ra24";
import { riskAssessment25 } from "../Data/RiskAssessment/ra25";
import { riskAssessment26 } from "../Data/RiskAssessment/ra26";
import { riskAssessment27 } from "../Data/RiskAssessment/ra27";
import { riskAssessment28 } from "../Data/RiskAssessment/ra28";
import { riskAssessment29 } from "../Data/RiskAssessment/ra29";
import { riskAssessment30 } from "../Data/RiskAssessment/ra30";

export const raRecords = [
    riskAssessment1,
    riskAssessment2,
    riskAssessment3,
    riskAssessment4,
    riskAssessment5,
    riskAssessment6,
    riskAssessment7,
    riskAssessment8,
    riskAssessment9,
    riskAssessment10,
    riskAssessment11,
    riskAssessment12,
    riskAssessment13,
    riskAssessment14,
    riskAssessment15,
    riskAssessment16,
    riskAssessment17,
    riskAssessment18,
    riskAssessment19,
    riskAssessment20,
    riskAssessment21,
    riskAssessment22,
    riskAssessment23,
    riskAssessment24,
    riskAssessment25,
    riskAssessment26,
    riskAssessment27,
    riskAssessment28,
    riskAssessment29,
    riskAssessment30,
]

const lastEditUser = "'demo'"
const lastEdit = "'2023-12-27 00:00:00+00'"

export function generateQueries(raRecords){
    var queries = ''
    // const lastEditUser = "'demo'"
    // const lastEdit = "'2023-12-27 00:00:00+00'"
    const hazardQueries = []

    raRecords.forEach(riskAssessment => {
        let workActivitiesQueries = []
        riskAssessment.workActivities.forEach(workActivity => {
            let workActivityQueries = generateWorkActivityQueries(workActivity)
            workActivitiesQueries = workActivitiesQueries.concat(workActivityQueries)
        })

        riskAssessment.raTasks.forEach(task => {
            
        })
    })
}

function generateWorkActivityQueries(workActivity){
    let workActivityName = `'${workActivity.Name}'`
    let workActivityQuery = `INSERT INTO "WorkActivity"("Name", "RATaskId", "RiskAssessmentId", "LastEditUser", "LastEdit")\nVALUES (${workActivityName}, @RATaskId, @RiskAssessmentId, ${lastEditUser}, ${lastEdit});\n`
    let workActivityIdQuery = 'DECLARE @WorkActivityId INT;\nSET @WorkActivityId = SCOPE_IDENTITY();\n'
    let hazardQueries = []
    workActivity.hazards.forEach(hazard => {
        hazardQueries = generateHazardQueries(hazard)
    })
    let queries = [workActivityQuery, workActivityIdQuery].concat(hazardQueries)
    return queries
}

function generateHazardQueries(hazard){
    let riskEvaluationQueries = generateRiskEvaluationQueries(hazard.riskEvaluation)
    let riskControlQueries = generateRiskControlQueries(hazard.riskControl)
    let name = `'${hazard.name}'`
    let hazardQuery = `INSERT INTO "Hazard"("Name", "RiskEvaluationId", "RiskControlId", "WorkActivityId", "LastEditUser", "LastEdit")\nVALUES (${name}, @RiskEvaluationId, @RiskControlId, @WorkActivityId, ${lastEditUser}, ${lastEdit});\n`

}

function generateRiskEvaluationQueries(riskEvaluation){
    let irpnQueries = generateIRPNQueries(riskEvaluation.irpn)
    let possiblePollutionHealthAffection = `'${riskEvaluation.possiblePollutionHealthAffection}'`
    let existingImpactControls = generateStringArrayQueries(riskEvaluation.existingImpactControls)
    let riskEvaluationQuery = `INSERT INTO "RiskEvaluation"("PossiblePollutionHealthAffection", "ExistingImpactControls", "IRPNId", "LastEditUser", "LastEdit")\n VALUES(${possiblePollutionHealthAffection}, ${existingImpactControls}, '@IRPNId', ${lastEditUser}, ${lastEdit});\n`
    let riskEvaluationIdQuery = 'DECLARE @RiskEvaluationId INT;\nSET @RiskEvaluationId = SCOPE_IDENTITY();\n'
    let queries = irpnQueries
    queries.push(riskEvaluationQuery)
    queries.push(riskEvaluationIdQuery)
    return queries
}

function generateStringArrayQueries(values){
    let valuesStrings = []
    values.forEach(value => {
        valuesStrings.push(`'${value}'`)
    })

    let query = 'ARRAY[' + values.join(',') + ']'
    return query
}

function generateRiskControlQueries(riskControl){
    let irpnQueries = generateIRPNQueries(riskControl.irpn)
    let additionalControlsQueries = generateStringArrayQueries(riskControl.additionalControls)
    let dueDate = `'${riskControl.dueDate}'`
    let implementationPerson = `'${riskControl.implementationPerson}'`
    let remarks = `'${riskControl.remarks}'`
    let riskControlQuery = `INSERT INTO "RiskControl"("AdditionalControls", "IRPNId", "DueDate", "ImplementationPerson", "Remarks", "LastEditUser", "LastEdit")\nVALUES (${additionalControlsQueries}, '@IRPNId', ${dueDate}, ${implementationPerson}, ${remarks}, ${lastEditUser}, ${lastEdit});\n`
    let riskControlIdQuery = 'DECLARE @RiskControlId INT;\nSET @RiskControlId = SCOPE_IDENTITY();\n'
    let queries = irpnQueries;
    queries.push(riskControlQuery)
    queries.push(riskControlIdQuery)
    return queries
}

function generateIRPNQueries(irpn){
    let irpnQuery = `INSERT INTO "IRPN"("Severity", "Likelihood", "Irpn", "LastEditUser", "LastEdit")\nVALUES (${irpn.severity}, ${irpn.likelihood}, ${irpn.irpn}, ${lastEditUser}, ${lastEdit});\n`
    let irpnId = `DECLARE @IRPNId INT;\nSET @IRPNId = SCOPE_IDENTITY();\n`
    return  [irpnQuery, irpnId]
}