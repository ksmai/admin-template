import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface ILinkGroup {
  name: string;
  icon: string;
  children: ILink[];
  category: string;
  prefix: string;
}

export interface ILink {
  name: string;
  href: string;
  icon: string;
  category: string;
}

/**
 * Render the links tab inside sidenav
 */
@Component({
  selector: 'admin-sidenav-links',
  templateUrl: './sidenav-links.component.html',
  styleUrls: ['./sidenav-links.component.scss'],
})
export class SidenavLinksComponent {
  filter: string;

  links: Array<ILink|ILinkGroup> = [{
    name: 'dashboard',
    href: '/dashboard',
    icon: 'tachometer',
    category: 'pages',
  }, {
    name: 'mailbox',
    icon: 'envelope-o',
    category: 'pages',
    prefix: '/mailbox',
    children: [{
      name: 'inbox',
      href: '/mailbox/inbox',
      icon: 'inbox',
      category: 'mailbox',
    }, {
      name: 'mail',
      href: '/mailbox/mail',
      icon: 'envelope-open-o',
      category: 'mailbox',
    }, {
      name: 'compose',
      href: '/mailbox/compose',
      icon: 'pencil',
      category: 'mailbox',
    }],
  }, {
    name: 'gallery',
    href: '/gallery',
    icon: 'picture-o',
    category: 'pages',
  }, {
    name: 'social',
    href: '/social',
    icon: 'share-alt',
    category: 'pages',
  }, {
    name: 'blog',
    icon: 'newspaper-o',
    category: 'pages',
    prefix: '/blog',
    children: [{
      name: 'posts',
      href: '/blog/posts',
      icon: 'object-group',
      category: 'blog',
    }, {
      name: 'single post',
      href: '/blog/post',
      icon: 'file-text-o',
      category: 'blog',
    }],
  }, {
    name: 'panels',
    href: '/panels',
    icon: 'columns',
    category: 'components',
  }, {
    name: 'charts',
    icon: 'signal',
    category: 'components',
    prefix: '/charts',
    children: [{
      name: 'chart.js',
      href: '/charts/chartjs',
      icon: 'line-chart',
      category: 'charts',
    }, {
      name: 'c3.js',
      href: '/charts/c3js',
      icon: 'pie-chart',
      category: 'charts',
    }, {
      name: 'morris.js',
      href: '/charts/morrisjs',
      icon: 'area-chart',
      category: 'charts',
    }],
  }, {
    name: 'static timeline',
    href: '/static-timeline',
    icon: 'clock-o',
    category: 'components',
  }, {
    name: 'interactive timeline',
    href: '/interactive-timeline',
    icon: 'circle-o-notch',
    category: 'components',
  }, {
    name: 'codemirror',
    href: '/codemirror',
    icon: 'code',
    category: 'components',
  }, {
    name: 'maps',
    href: '/maps',
    icon: 'map-marker',
    category: 'components',
  }, {
    name: 'editor',
    href: '/editor',
    icon: 'pencil-square-o',
    category: 'components',
  }, {
    name: 'ui elements',
    icon: 'toggle-off',
    category: 'components',
    prefix: '/ui-elements',
    children: [{
      name: 'buttons',
      href: '/ui-elements/buttons',
      icon: 'dot-circle-o',
      category: 'ui elements',
    }, {
      name: 'dropdowns',
      href: '/ui-elements/dropdowns',
      icon: 'caret-square-o-down',
      category: 'ui elements',
    }, {
      name: 'tabs & navs',
      href: '/ui-elements/tabs-and-navs',
      icon: 'paper-plane-o',
      category: 'ui elements',
    }, {
      name: 'sliders',
      href: '/ui-elements/sliders',
      icon: 'sliders',
      category: 'ui elements',
    }, {
      name: 'knobs',
      href: '/ui-elements/knobs',
      icon: 'repeat',
      category: 'ui elements',
    }, {
      name: 'modals',
      href: '/ui-elements/modals',
      icon: 'window-maximize',
      category: 'ui elements',
    }, {
      name: 'messenger',
      href: '/ui-elements/messenger',
      icon: 'commenting-o',
      category: 'ui elements',
    }],
  }, {
    name: 'forms',
    icon: 'files-o',
    category: 'components',
    prefix: '/forms',
    children: [{
      name: 'controls',
      href: '/forms/controls',
      icon: 'check-square-o',
      category: 'forms',
    }, {
      name: 'x-editable',
      href: '/forms/x-editable',
      icon: 'pencil-square-o',
      category: 'forms',
    }, {
      name: 'wizard',
      href: '/forms/wizard',
      icon: 'magic',
      category: 'forms',
    }],
  }, {
    name: 'tables',
    icon: 'table',
    category: 'components',
    prefix: '/tables',
    children: [{
      name: 'bootstrap tables',
      href: '/tables/bootstrap-tables',
      icon: 'th-large',
      category: 'tables',
    }, {
      name: 'datatables',
      href: '/tables/datatables',
      icon: 'th',
      category: 'tables',
    }, {
      name: 'tablesaw',
      href: '/tables/tablesaw',
      icon: 'th-list',
      category: 'tables',
    }],
  }, {
    name: 'grid',
    href: '/grid',
    icon: 'plus-square-o',
    category: 'components',
  }, {
    name: 'calendar',
    href: '/calendar',
    icon: 'calendar',
    category: 'components',
  }, {
    name: 'file utilities',
    icon: 'folder-open-o',
    category: 'components',
    prefix: '/file-utilities',
    children: [{
      name: 'dropzone',
      href: '/file-utilities/dropzone',
      icon: 'download',
      category: 'file utilities',
    }, {
      name: 'image cropping',
      href: '/file-utilities/image-cropping',
      icon: 'crop',
      category: 'file utilities',
    }],
  }, {
    name: 'fonts',
    href: '/fonts',
    icon: 'font',
    category: 'components',
  }, {
    name: 'login',
    href: '/login',
    icon: 'sign-in',
    category: 'extras',
  }, {
    name: 'signup',
    href: '/signup',
    icon: 'user-plus',
    category: 'extras',
  }, {
    name: 'lock page',
    href: '/lock',
    icon: 'lock',
    category: 'extras',
  }, {
    name: 'invoice',
    href: '/invoice',
    icon: 'money',
    category: 'extras',
  }, {
    name: 'pricing tables',
    href: '/pricing',
    icon: 'tags',
    category: 'extras',
  }];

  closed = {
    'mailbox': true,
    'blog': true,
    'charts': true,
    'ui elements': true,
    'forms': true,
    'tables': true,
    'file utilities': true,
  };

  constructor(private router: Router) {
  }

  onToggleClose(name: string): void {
    if (this.closed.hasOwnProperty(name)) {
      this.closed[name] = !this.closed[name];
    }
  }

  get displayedLinks() {
    const links: any[] = this.filteredLinks;
    let lastCategory = null;
    for (let i = links.length - 1; i >= 0; i--) {
      if (lastCategory !== null && lastCategory !== links[i].category) {
        links.splice(i + 1, 0, lastCategory);
      }
      lastCategory = links[i].category;
    }
    if (lastCategory) {
      links.splice(0, 0, lastCategory);
    }
    return links;
  }

  get filteredLinks() {
    if (!this.filter) {
      return this.links.slice();
    }

    const regex = new RegExp(this.filter, 'i');

    return this.links.filter((link: ILink|ILinkGroup) => {
        return regex.test(link.name) || regex.test(link.category) ||
          !!(link as ILinkGroup).children &&
          (link as ILinkGroup).children.some((child: ILink) => {
            return regex.test(child.name);
          });
    });
  }

  itemClass(entry: any): { [key: string]: boolean } {
    const classes = {
      'links__link-item': !!entry.name && !entry.children,
      'links__group-item': !!entry.children,
      'links__group-item--closed': !!entry.children &&
        this.closed[entry.name],
      'links__category-item': !entry.name,
    };

    if (entry.children) {
      classes[`links__group-item--${entry.name.replace(/ /g, '-')}`] = true;
      classes['links__group-item--active'] = this.router
        .isActive(entry.prefix, false);
    }

    return classes;
  }
}
