<script lang="ts">
	interface FeatureBlock {
		title: string;
		desc: string;
		video: string;
		icon: string;
	}

	interface Props {
		blocks?: FeatureBlock[];
	}

	let {
		blocks = [
			{
				title: 'Заготовка',
				desc: 'Современные харвестеры и опытные операторы.',
				video: '/video/01.mp4',
				icon: ''
			},
			{
				title: 'Переработка',
				desc: 'Высокоточное производство пиломатериалов.',
				video: '/video/02.mp4',
				icon: ''
			},
			{
				title: 'Логистика',
				desc: 'Собственный автопарк для быстрой доставки.',
				video: '/video/03.mp4',
				icon: ''
			},
			{
				title: 'Экология',
				desc: 'Восстановление лесов — наш приоритет.',
				video: '/video/04.mp4',
				icon: ''
			}
		]
	}: Props = $props();
</script>

<section class="flex min-h-[320px] w-full flex-col overflow-hidden bg-black">
	<!-- Сетка без швов (gap-0) -->
	<div class="grid flex-grow grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
		{#each blocks as block, i}
			<!-- Intentionally longer duration (700ms) for dramatic hero block effect -->
			<div
				class="group relative flex flex-col justify-end overflow-hidden transition-all duration-700"
			>
				<!-- Видео фон конкретного блока -->
				<div class="absolute inset-0 z-0">
					<video
						autoplay
						muted
						loop
						playsinline
						class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
					>
						<!-- Intentionally slow (1000ms) for smooth parallax-like effect -->
						<source src={block.video} type="video/mp4" />
					</video>

					<!-- Индивидуальный оверлей для читаемости -->
					<div
						class="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20"
					></div>

					<!-- Градиент снизу вверх для текста -->
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90"
					></div>
				</div>

				<!-- Контент блока -->
				<div class="relative z-10 flex h-full flex-col justify-end p-16 md:p-12">
					<!-- Иконка с анимацией -->
					<div class="mb-4 text-5xl transition-transform duration-500 group-hover:-translate-y-2">
						{block.icon}
					</div>

					<h3 class="mb-2 text-2xl font-black tracking-tighter text-white uppercase md:text-3xl">
						{block.title}
					</h3>

					<!-- Скрытое описание, которое появляется при наведении -->
					<div
						class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100"
					>
						<p class="text-lg leading-relaxed text-gray-200">
							{block.desc}
						</p>
					</div>

					<!-- Декоративный разделитель -->
					<div
						class="mt-6 h-1 w-12 bg-green-500 transition-all duration-500 group-hover:w-full"
					></div>
				</div>

				<!-- Тонкая рамка-разделитель (опционально, для эффекта стекла) -->
				<div
					class="pointer-events-none absolute inset-0 border-r border-b border-white/10 last:border-0"
				></div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* Скрытие границ для последних элементов в рядах на разных брейкпоинтах */
	@media (min-width: 640px) {
		.grid > div:nth-child(2n) {
			border-right: none;
		}
	}
	@media (min-width: 1024px) {
		.grid > div:nth-child(2n) {
			border-right: 1px solid rgba(255, 255, 255, 0.1);
		}
		.grid > div:nth-child(4n) {
			border-right: none;
		}
	}
</style>
