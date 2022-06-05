const validorTel = value => {
  if (value.length !== 11 && value.length !== 8) return false
  const re = /^(041|044|031|026|045|084|077|021|038|056|051|058|061|024|023|054|071|028|025|087|034|083|074|017|013|066|011|086|076|081|035)?(\d){8}$/
  return re.test(value)
}
