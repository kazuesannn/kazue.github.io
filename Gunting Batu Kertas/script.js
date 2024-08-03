let putaran = 0;

function mainkanGame(pilihanPemain) {
	const pilihan = ['gunting', 'batu', 'kertas'];
	const pilihanKomputer = pilihan[Math.floor(Math.random() * pilihan.length)];

	document.getElementById('pilihan-pemain').textContent = `Pilihan kamu: ${pilihanPemain}`;
	document.getElementById('pilihan-komputer').textContent = `Pilihan komputer: ${pilihanKomputer}`;
	const hasil = tentukanPemenang(pilihanPemain, pilihanKomputer);
	document.getElementById('hasil-game').textContent = `Hasil: ${hasil}`;

	tambahkanKeTabel(pilihanPemain, pilihanKomputer, hasil);
}

function tentukanPemenang(pilihanPemain, pilihanKomputer) {
	if (pilihanPemain === pilihanKomputer) {
		return 'Seri!';
	} else if (
		(pilihanPemain === 'gunting' && pilihanKomputer === 'kertas') ||
		(pilihanPemain === 'batu' && pilihanKomputer === 'gunting') ||
		(pilihanPemain === 'kertas' && pilihanKomputer === 'batu')
	) {
		return 'Kamu menang!';
	} else {
		return 'Kamu kalah!';
	}
}

function tambahkanKeTabel(pilihanPemain, pilihanKomputer, hasil) {
	putaran++;
	const tabel = document.getElementById('tabel-hasil').getElementsByTagName('tbody')[0];
	const barisBaru = tabel.insertRow();

	const selPutaran = barisBaru.insertCell(0);
	const selPilihanPemain = barisBaru.insertCell(1);
	const selPilihanKomputer = barisBaru.insertCell(2);
	const selHasil = barisBaru.insertCell(3);

	selPutaran.textContent = putaran;
	selPilihanPemain.textContent = pilihanPemain;
	selPilihanKomputer.textContent = pilihanKomputer;
	selHasil.textContent = hasil;
}

function resetGame() {
	document.getElementById('pilihan-pemain').textContent = 'Pilihan kamu: ';
	document.getElementById('pilihan-komputer').textContent = 'Pilihan komputer: ';
	document.getElementById('hasil-game').textContent = 'Hasil: ';
	document.getElementById('tabel-hasil').getElementsByTagName('tbody')[0].innerHTML = '';
	putaran = 0;
}
