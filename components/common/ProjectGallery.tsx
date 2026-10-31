'use client'

import * as React from 'react';
import Image from 'next/image';
import { ArrowsPointingOutIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { IProject } from '@/lib/types';
import { projects } from '@/content/portfolio';

interface IProjectGalleryProps {
  project: IProject;
  sizes: string;
}

const SWIPE_DISTANCE = 50;

// The card screenshot. Clicking it opens a lightbox carousel: the stack image first, then the project's screenshots.
// Built on <dialog>, so Escape closes it, focus stays inside, and the page behind is inert.
const ProjectGallery: React.FunctionComponent<IProjectGalleryProps> = ({ project, sizes }) => {
  const images = [project.image, ...(project.screenshots ?? [])];
  const hasMany = images.length > 1;
  const { lightbox } = projects;

  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef<number | null>(null);
  const [index, setIndex] = React.useState(0);

  const go = React.useCallback(
    (step: number) => setIndex((current) => (current + step + images.length) % images.length),
    [images.length],
  );

  const open = () => {
    setIndex(0);
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = 'hidden';
  };

  const close = () => dialogRef.current?.close();

  // Runs for every way of closing (button, Escape, backdrop click).
  const handleClose = () => {
    document.documentElement.style.overflow = '';
    triggerRef.current?.focus();
  };

  // Tall full-page screenshots scroll inside the lightbox; start each one at the top.
  React.useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!hasMany) return;
    if (event.key === 'ArrowLeft') go(-1);
    if (event.key === 'ArrowRight') go(1);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null || !hasMany) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > SWIPE_DISTANCE) go(distance < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const iconButton = 'flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-strong text-foreground backdrop-blur transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  if (!project.image) {
    return (
      <div className="flex aspect-[3/2] items-center justify-center rounded-lg border border-border bg-surface font-mono text-label text-muted-foreground">
        {projects.imagePlaceholder}
      </div>
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={open}
        aria-label={`${lightbox.open} ${project.title}`}
        className="group/shot relative block aspect-[3/2] w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-300 group-hover/shot:scale-[1.02]"
        />
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
        >
          <ArrowsPointingOutIcon className="h-4 w-4" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={project.title}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        className="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-transparent p-0 text-foreground backdrop:bg-black/85 backdrop:backdrop-blur-md"
      >
        {/* Clicking the empty area around the image closes the lightbox. */}
        <div
          className="flex h-full flex-col"
          onClick={(event) => event.target === event.currentTarget && close()}
        >
          <div className="flex items-center justify-between gap-4 px-gutter py-3 sm:px-6">
            <p className="min-w-0 truncate font-mono text-label text-muted-foreground">
              {project.title}
              {hasMany && <span className="ml-3 text-foreground">{index + 1} / {images.length}</span>}
            </p>
            <button type="button" onClick={close} aria-label={lightbox.close} className={iconButton}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-start justify-center px-gutter pb-gutter sm:px-20"
            onClick={(event) => event.target === event.currentTarget && close()}
            onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={viewportRef}
              className="max-h-full w-full max-w-6xl overflow-y-auto overscroll-contain rounded-window border border-border shadow-glass"
            >
              <Image
                key={images[index]}
                src={images[index]}
                alt={`${project.title} screenshot ${index + 1} of ${images.length}`}
                width={1920}
                height={1280}
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="block h-auto w-full animate-in fade-in-0 duration-200"
              />
            </div>

            {hasMany && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={lightbox.previous}
                  className={`${iconButton} absolute top-1/2 left-4 hidden -translate-y-1/2 sm:flex`}
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={lightbox.next}
                  className={`${iconButton} absolute top-1/2 right-4 hidden -translate-y-1/2 sm:flex`}
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Phone: arrows sit under the image so they don't cover it. */}
          {hasMany && (
            <div className="flex justify-center gap-4 pb-6 sm:hidden">
              <button type="button" onClick={() => go(-1)} aria-label={lightbox.previous} className={iconButton}>
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label={lightbox.next} className={iconButton}>
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};

export default ProjectGallery;
