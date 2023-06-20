function feladat01(szinek) {
    let osszesLehetoseg = []
  
    for (let i = 0; i < Math.pow(2, szinek.length); i++) {
      let keveres = []
      for (let j = 0; j < szinek.length; j++) {
        if ((i & Math.pow(2, j)) !== 0) {
            keveres.push(szinek[j])
        }
      }
      if (keveres.length > 1) {
        osszesLehetoseg.push(keveres)
      }
    }
  
    return osszesLehetoseg.length
  }
  
  const szinek = ['piros', 'kék', 'zöld', 'zöld']
  const megoldas = feladat01(szinek)
  
  console.log(megoldas)