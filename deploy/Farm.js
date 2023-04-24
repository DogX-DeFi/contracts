module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const DogX = '0xEaeA1712438ED6A3Da0e161DABA7F19178b7f0e2'
  const Dev = '0xD6a33cc318c50C5b6825a26C8aa4bf353cE87356'
  const Fee = '0xD6a33cc318c50C5b6825a26C8aa4bf353cE87356'
  await deploy("MasterChef", {
    from: deployer,
    args: [DogX,Dev,Fee,40339],    
    log: true,
    deterministicDeployment: false   
  });
};
module.exports.tags = ["DogXFarm"];
