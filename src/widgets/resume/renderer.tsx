import { cn } from '@shared/lib/cn';

import type { ContainerNode, LinkNode, ListNode, Nodes, ResumeData, SeperatorNode, TextNode } from './types';
import { resolvePath } from './utils';
import React from 'react';

type RenderProps = {
  template: any;
  data: ResumeData;
};

export function ResumeRenderer({ template, data }: RenderProps) {
  const { page, body } = template;

  return (
    <div
      className={cn(page.className)}
      style={{
        width: page.width ?? 794, // ~ A4 at 96dpi
        height: page.height,
        padding: page.padding ?? 24,
        background: page.background ?? 'white',
        fontFamily: page.fontFamily,
      }}
    >
      {renderNode(body, data)}
    </div>
  );
}

function renderNode(node: Nodes, data: ResumeData): React.ReactNode {
  switch (node.type) {
    case 'container':
      return renderContainer(node as ContainerNode, data);
    case 'text':
      return renderText(node as TextNode, data);
    case 'list':
      return renderList(node as ListNode, data);
    case 'seperator':
      return renderSeperator(node as SeperatorNode);
    case 'link':
      return renderLink(node as LinkNode, data);
    default:
      return null;
  }
}

function renderContainer(node: ContainerNode, data: ResumeData) {
  const { children, className } = node;

  console.log(children);

  return (
    <div className={cn(`flex`, className)}>
      {children.map((child) => (
        <React.Fragment key={child.id}>{renderNode(child, data)}</React.Fragment>
      ))}
    </div>
  );
}

function renderSeperator(node: SeperatorNode) {
  const { variant = 'pipe', direction = 'horizontal', className } = node;

  if (variant === 'pipe') {
    return <span className={className}>|</span>;
  } else if (variant === 'line') {
    return (
      <div
        className={cn('w-full bg-zinc-200', direction === 'horizontal' ? 'h-px w-full' : 'w-px h-full', className)}
      />
    );
  }
}

function renderText(node: TextNode, data: ResumeData) {
  const { pathWithFallback, className, prefix = '', suffix = '' } = node;

  const resolved = resolvePath({ data, ...pathWithFallback });
  const finalString = `${prefix}${resolved}${suffix}`;

  return <p className={cn(className)}>{finalString}</p>;
}

function renderList(node: ListNode, data: ResumeData) {
  const { pathWithFallback, presentation, transform } = node;
  const resolved = resolvePath({ data, ...pathWithFallback });

  if (!Array.isArray(resolved)) {
    return null;
  }

  if (transform?.variant === 'flatten') {
    const flattened = resolved.flatMap((item) => item[transform.key]);

    return (
      <div className={cn('flex flex-wrap', node.className)}>
        {flattened.map((child) => renderNode(presentation[0], child))}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-wrap', node.className)}>
      {Object.entries(resolved).map(([_key, value]) =>
        presentation.map((child) => {
          return renderNode(child, value);
        }),
      )}
    </div>
  );
}

function renderLink(node: LinkNode, data: ResumeData) {
  const { pathWithFallback, href, className } = node;

  const resolved = resolvePath({ data, ...pathWithFallback });

  return (
    <a href={href} className={cn(className)}>
      {resolved}
    </a>
  );
}
