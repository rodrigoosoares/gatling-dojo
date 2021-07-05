const updateYamlHelper = require('./helpers/updateYamlHelper')

try {
    updatePricingEngine()
    updatePriceService()
} catch (e) {
    console.log(e);
}

function updatePriceService() {
    const microserviceName = 'price-service'

    console.log("Start Updating Price-Service");

    updateYaml(microserviceName, 9401, 'CONSUMER');
    updateYaml(microserviceName, 9402, 'RELAY');
    updateYaml(microserviceName, 9403, 'API');
}

function updatePricingEngine() {
    const priceApiYamlPath = '../../pricing-engine/api/src/main/resources/application.yml'

    console.log("Start Updating Price-Engine");

    console.log("\tAPI");
    console.log("\t\tUpdating API application.yml");
    updateYamlHelper.updatePricingEngineYaml(priceApiYamlPath);
    console.log("\t\tUpdated API application.yml\n");
}


function updateYaml(microserviceName, port, structure) {
    const consumerYamlPath = `../../${microserviceName}/${structure.toLowerCase()}/src/main/resources/application.yml`

    console.log(`\t${structure}`);

    console.log(`\t\tUpdating ${structure} application.yml`);

    updateYamlHelper.updatDataTierYaml(port, consumerYamlPath);

    console.log(`\t\tUpdated ${structure} application.yml`);
}
