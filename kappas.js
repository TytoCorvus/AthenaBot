var random_kappa = function(){
  const kappas = [
	'Kappa',
	'Keepo',
	'KappaPride',
	'KappaRoss',
	'KappaClaus'	
	]

  var kappa = kappas[Math.floor(Math.random() * kappas.length)];
  return kappa;
}

module.exports = random_kappa;
