let scrollPosition = 0;

function handleScrollReturn() {
	document.body.classList.remove("block-scroll");
	document.body.style.removeProperty("top");
	document.body.style.removeProperty("position");
	document.body.style.removeProperty("width");
	window.scrollTo(0, scrollPosition);
}

function handleScrollBlock() {
	scrollPosition = window.pageYOffset;
	document.body.classList.add("block-scroll");
	document.body.style.position = "fixed";
	document.body.style.top = `-${scrollPosition}px`;
	document.body.style.width = "100%";
}

function initModal(modalId, dataAttr, closeBtnClass) {
	const modal = document.querySelector(modalId);
	const openBtns = document.querySelectorAll(`[${dataAttr}]`);
	const closeBtn = modal?.querySelector(closeBtnClass);

	if (modal) {
		openBtns.forEach((el) => {
			el.addEventListener("click", function () {
				handleScrollBlock(this);
				modal.showModal();
			});
		});

		if (closeBtn) {
			closeBtn.addEventListener("click", () => modal.close());
		}

		modal.addEventListener("close", handleScrollReturn);
		modal.addEventListener("cancel", handleScrollReturn);
		modal.addEventListener("click", (e) => {
			if (e.target === modal) modal.close();
		});
	}
}

initModal("#modal-privacy", "data-privacy-open", ".modal-privacy__closeBtn");
initModal("#modal-call", "data-call-open", ".modal-form__closeBtn");
initModal("#modal-partnership", "data-partnership-open", ".modal-form__closeBtn");
initModal("#modal-quastion", "data-quastion-open", ".modal-form__closeBtn");

const popupTest = document.querySelector("#popup-test");
const popupTestCloseBtn = popupTest.querySelector(".popup-test__closeBtn");

popupTestCloseBtn.addEventListener("click", () => popupTest.close());

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
    popupTest.removeAttribute('open');
	}
});

const cookies = document.querySelector("#popup-cookies");
const cookiesCloseBtn = cookies.querySelector(".popup-cookies__closeBtn");

cookiesCloseBtn.addEventListener("click", () => cookies.close());

window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		cookies.style.setProperty('bottom', '1rem');
	}
});