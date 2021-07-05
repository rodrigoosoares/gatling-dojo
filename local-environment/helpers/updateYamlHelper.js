
const yaml = require('js-yaml')
const fileHelper = require('./fileHelper')

exports.updatDataTierYaml = (port, yamlPath) => {

    const loadedYamlFile = fileHelper.readFile(yamlPath)
    let data = yaml.load(loadedYamlFile);

    updateDataTierData(data, port);

    fileHelper.writeFile(yamlPath, yaml.dump(data));

}

exports.updatePricingEngineYaml = (yamlPath) => {

    const loadedYamlFile = fileHelper.readFile(yamlPath)
    let data = yaml.load(loadedYamlFile);

    updatePricingEngineData(data);

    fileHelper.writeFile(yamlPath, yaml.dump(data));

}

function updateDataTierData(data, port) {
    data.server.port = "${SERVER_PORT:" + port +"}";
}

function updatePricingEngineData(data) {
    data.client.price.host = "${PRICE_HOST:http://localhost:9403}";
}